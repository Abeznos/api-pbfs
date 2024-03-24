require('dotenv').config();

const express = require("express");
const companiesRouter = require('./routes/companies.routes');

const { sql } = require('@vercel/postgres');
const app = express();

app.use(express.json());
app.use('/', companiesRouter);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;