require('dotenv').config();

const express = require("express");
const companiesRouter = require('../routes/companies.routes');

const app = express();

app.use('/api', companiesRouter);

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;