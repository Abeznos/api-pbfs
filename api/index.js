require('dotenv').config();

const express = require("express");
const app = express();
const db = require('./queries');

//console.log(db);

const bodyParser = require('body-parser')
const path = require('path');


app
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(process.env.PORT, () => console.log(`Server ready on port ${process.env.PORT}`));

module.exports = app;