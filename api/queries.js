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


//const createCompany = async (request, response) => {
//  const { name, logo} = request.body;
//  //const id = uuidv4();
//  try {
//    await pool.query('INSERT INTO companies (company_name, logo) VALUES ($1, $2) RETURNING *', [name, logo], (error, results) => {
//      response.status(201).send(`Company added company with ID: ${results.rows[0].id}`);
//    });
//  } catch (error) {
//    console.error(error);
//		res.status(500).send('Error adding company');
//  }
//}


const createCompany = async (request, response) => {
  const { company_name, tariff, company_status, billing_date, logo, pb_id } = request.body;
  const id = uuidv4();
  try {
    await pool.query('INSERT INTO companies (company_id, company_name, tariff, company_status, logo, pb_id, billing_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [id, company_name, tariff, company_status, logo, pb_id, billing_date], (error, results) => {
      response.status(201).send(`Company added with ID: ${results.rows[0].company_id}`)
    });
  } catch (error) {
    res.status(500).send('Error adding company');
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
  const id = parseInt(request.params.company_id)

  try {
    await pool.query('DELETE FROM companies WHERE company_id = $1', [id], (error, results) => {
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