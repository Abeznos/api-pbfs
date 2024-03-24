class CompaniesController {
    async createCompany(req, res) {
        const {name, logo, pb_id} = req.body;
        console.log(name, logo, pb_id);
        res.json('Ok');
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