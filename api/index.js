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
        res.json(newCompany);
	} catch (error) {
		console.error(error);
		res.status(500).send('Error adding user');
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