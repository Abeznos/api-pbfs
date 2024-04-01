require('dotenv').config();
const { v4: uuidv4 } = require('uuid');

const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL
});


const createCompany = async (request, response) => {
  const { company_name, tariff, company_status, logo, pb_id } = request.body;
  const id = uuidv4();
  try {
    await pool.query('INSERT INTO companies (company_id, company_name, tariff, company_status, logo, pb_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [id, company_name, tariff, company_status, logo, pb_id], (error, results) => {
      response.status(201).send('Company added successfully');
    });
  } catch (error) {
      console.error(error);
      res.status(500).send('Error adding compony');
  }
}

const getCompanies = async (request, response) => {
  try {
    await pool.query('SELECT * FROM companies ORDER BY company_id ASC', (error, results) => {
      response.status(200).json(results.rows)
    });
 } catch (error) {
		console.error(error);
		res.status(500).send('Error getting componies');
  }
}

const getCompanyByID = async (request, response) => {
  const id = request.params.id;

  try {
    await pool.query('SELECT * FROM companies WHERE company_id = $1', [id], (error, results) => {
      response.status(200).json(results.rows);
    })
  } catch (error) {
		console.error(error);
		res.status(500).send(`Error getting company with ID: ${id}`);
  }
}

const updateCompany = async (request, response) => {
  const { company_id, company_name, tariff, company_status, logo, pb_id } = request.body;
  
  try {
    await pool.query(
      'UPDATE companies SET company_name = $1, tariff = $2, company_status = $3, logo = $4, pb_id = $5 WHERE company_id = $6 RETURNING *', 
      [company_name, tariff, company_status, logo, pb_id, company_id], (error, results) => {
        response.status(200).send(results.rows[0])
    });
  } catch(error) {
    res.status(500).send(`Error updating company with ID: ${id}`);
  }
}

const deleteCompany = async (request, response) => {
  const id = request.params.id;

  try {
    await pool.query('DELETE FROM companies WHERE company_id = $1', [id], (error, results) => {
      response.status(200).send('Company deleted successfully')
    });
  } catch (error) {
		console.error(error);
		res.status(500).send('Error delete company');
  }
}


module.exports = {
  createCompany,
  getCompanies,
  getCompanyByID,
  updateCompany,
  deleteCompany,
};