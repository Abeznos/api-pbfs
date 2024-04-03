const companyService = require('../services/CompanyService');

class CompanyController {
    async createCompany(request, response) {
        try {
            const company = await companyService.createCompany(request.body);
            return response.status(201).json(company);
        } catch(error) {
            response.status(500).json(error.message)
        }
    }

    async getAllCompanies(request, response) {
        try {
            const companies = await companyService.getAllCompanies();
            return response.status(200).json(companies);
        } catch (error) {
            response.status(500).json(error.message)
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
            response.status(500).json(error.message)
        }
    }

    async deleteCompany(request, response) {
        try {
            const company = await companyService.deleteCompany(request.params.id);
            return response.status(200).json(company);
        } catch(error) {
            response.status(500).json(error.message)
        }
    }
}

module.exports = new CompanyController();