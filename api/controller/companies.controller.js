const db = require('../db');
console.log(db);

class CompaniesController {
    async createCompany(req, res) {
        const {name, logo, pb_id} = req.body;
        console.log(db);
        //const newCompany = await db.query('INSERT INTO companies (name, logo, pb_id) values ($1, $2, $3) RETURNING *', [name, logo, pb_id]);
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