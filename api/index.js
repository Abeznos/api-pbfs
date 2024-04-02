require('dotenv').config();

const express = require('express');
const companyRouter = require('./routes/CompanyRouter')
const PORT = process.env.PORT || 3000;
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const { request } = require('http');

app.use(express.json());
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.send('api-pbfs server start')
});

app.use('/', companyRouter);

async function startApp() {
  try {
    app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
  } catch(error) {
    console.log(errorr);
  }
}

startApp();
