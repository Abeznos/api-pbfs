require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
  //user: process.env.POSTGRES_USER,
  //host: process.env.POSTGRES_HOST,
  //database: process.env.POSTGRES_DATABASE,
  //password: process.env.POSTGRES_PASSWORD,
  //port: process.env.POSTGRES_PORT,
});


const createCompany = async (request, response) => {
  const { name, tariff, logo, pb_id } = request.body;
  const id = uuidv4();
  try {
    await pool.query('INSERT INTO companies (name, tariff, logo, pb_id) VALUES ($1, $2, $3, $4,)', [name, tariff, logo, pb_id ], (error, results) => {
      response.status(201).send(`Company added`);
    });
  } catch (error) {

  }
}

const getCompanies = async (request, response) => {
  try {
    await pool.query('SELECT * FROM companies ORDER BY id ASC', (error, results) => {
      response.status(200).json(results.rows)
    });
 } catch (error) {
		console.error(error);
		res.status(500).send('Error getting componies');
  }
}

const getCompanyByID = async (request, response) => {
  const id = parseInt(request.params.id);

  try {
    await pool.query('SELECT * FROM companies WHERE id = $1', [id], (error, results) => {
      response.status(200).json(results.rows);
    })
  } catch (error) {
		console.error(error);
		res.status(500).send(`Error getting company with ID: ${id}`);
  }
}

const deleteCompany = async (request, response) => {
  const id = parseInt(request.params.id)

  try {
    await pool.query('DELETE FROM companies WHERE id = $1', [id], (error, results) => {
      response.status(200).send(`Company deleted with ID: ${id}`)
    });
 } catch (error) {
		console.error(error);
		res.status(500).send('Error delete company');
  }
}




//console.log(uuidv4());

module.exports = {
  getCompanies,
  getCompanyByID,
  deleteCompany,
  createCompany
};