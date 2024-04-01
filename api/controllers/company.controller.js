const db = require('../queries');
const { v4: uuidv4 } = require('uuid');

class CompanyController {
    async createCompany(request, response) {
        const { company_name, tariff, company_status, logo, pb_id } = request.body;
        const id = uuidv4();

        const newCompany = await db.query('INSERT INTO companies (company_id, company_name, tariff, company_status, logo, pb_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [id, company_name, tariff, company_status, logo, pb_id]); 

            response.status(201).send('Company added successfully');
    }
}

module.exports = new CompanyController();