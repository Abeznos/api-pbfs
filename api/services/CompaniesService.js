const db = require('../db');
const { v4: uuidv4 } = require('uuid');

class CompanyService {
    async createCompany(data) {
        const { company_name, tariff, company_status, logo, pb_id } = data;
        const id = uuidv4();
        const company = await db.query('INSERT INTO companies (company_id, company_name, tariff, company_status, logo, pb_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', 
        [id, company_name, tariff, company_status, logo, pb_id]);
        return company.rows[0];
    }

    async getAllCompanies() {
        const companies = await db.query('SELECT * FROM companies ORDER BY company_id ASC');
        return companies.rows;
    }

    async getOneCompany(id) {
        if (!id) {
            throw new Error('Не указан Id компании');
        }
        const company = await db.query('SELECT * FROM companies WHERE company_id = $1', [id]);
        return company.rows[0];
    }

    async upddateCompanyById(data) {
        if (!data.company_id) {
            throw new Error('Не указан Id компании');
        }
        const { company_id, company_name, tariff, company_status, logo, pb_id } = data;

        const company = await db.query('UPDATE companies SET company_name = $1, tariff = $2, company_status = $3, logo = $4, pb_id = $5 WHERE company_id = $6 RETURNING *', 
        [company_name, tariff, company_status, logo, pb_id, company_id]);
        return company.rows[0];
    }

    async deleteCompany(id) {
        if (!id) {
            throw new Error('Не указан Id компании');
        }
        const company = await db.query('DELETE FROM companies WHERE company_id = $1', [id]);
        return company.rows[0]
    }
}

module.exports = new CompanyService();