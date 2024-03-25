require('dotenv').config();

const express = require("express");
//const companiesRouter = require('./routes/companies.routes');

const { sql } = require('@vercel/postgres');
const app = express();

app.use(express.json());
//app.use('/', companiesRouter);

app.post('/uploadSuccessful', urlencodedParser, async (req, res) => {
	try {
		await sql`INSERT INTO companies (name, logo, pb_id) VALUES (${req.body.name}, ${req.body.logo}, ${req.body.pb_id});`;
		res.json(newCompany);
        //res.status(200).send('<h1>User added successfully</h1>');
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