const companyService = require('../services/CompanyService');

class CompanyController {
    async createCompany(request, response) {

    }

    async getAllCompanies(request, response) {
        try {
            const companies = await companyService.getAllCompanies();
            return response.status(200).json(companies);
        } catch (error) {
            response.status(500).json(error)
        }
    }

    async getOneCompany(request, response) {
        try {
            const company = await companyService.getOneCompany(request.params.id);
            return response.status(200).json(company);
        } catch (error) {
            response.status(500).json(error)
        }
    }

    async upddateCompanyById(request, response) {
        try {
            const company = await companyService.upddateCompanyById(request.body);
            return response.status(200).json(company);
        } catch (error) {
            response.status(500).json(error)
        }
    }

    async deleteCompany(request, response) {
        
    }
}

module.exports = new CompanyController();