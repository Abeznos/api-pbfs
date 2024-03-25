require('dotenv').config();

const express = require("express");
//const companiesRouter = require('./routes/companies.routes');

const app = express();
const { sql } = require('@vercel/postgres');

const bodyParser = require('body-parser');
const path = require('path');

// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.use(express.json());
//app.use('/', companiesRouter);

app.post('/companies', urlencodedParser, async (req, res) => {
	try {
		const newCompany = await sql`INSERT INTO companies (name, logo, pb_id) VALUES (${req.body.name}, ${req.body.logo}, ${req.body.pb_id});`;
        res.json(newCompany.rows[0]);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error adding user');
	}
});

app.get('/page', urlencodedParser, async (req, res) => {
	try {
        const id = req.params.page_id;
        const page = await sql`SELECT * FROM pages were page_id = ${id}`;
        if (pages && pages.rows.length > 0) {
            res.status(200).send(res.json(page.rows[0]));
        } else {
            res.status(404).send('Page not found');
        }
    } catch (error) {
		console.error(error);
		res.status(500).send('Error retrieving users');
    }
});


//async createCompany(req, res) {
//    const {name, logo, pb_id} = req.body;
//    const newCompany = await db.query('INSERT INTO companies (name, logo, pb_id) VALUES ($1, $2, $3) RETURNING *', [name, logo, pb_id]);
//    res.json(newCompany);
//}


app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;