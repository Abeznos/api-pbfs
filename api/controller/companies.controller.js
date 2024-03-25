//const db = require('../db');
const { sql } = require('@vercel/postgres');
class CompaniesController {
    async createCompany(req, res) {
        const {name, logo, pb_id} = req.body;
        const newCompany = await db.query('INSERT INTO companies (name, logo, pb_id) VALUES ($1, $2, $3) RETURNING *', [name, logo, pb_id]);
        res.json(newCompany);
    }
    async getCompany(req, res) {

    }
    async getAllCompaies(req, res) {

    }
    async updateCompany(req, res) {

    }
    async deleteCompany(req, res) {

    }
}

module.exports = new CompaniesController();