const companiesService = require('../services/CompaniesService');

class CompaniesController {
    async createCompany(request, response) {
        try {
            const company = await companiesService.createCompany(request.body);
            return response.status(201).json(company);
        } catch(error) {
            response.status(500).json(error.message)
        }
    }

    async getAllCompanies(request, response) {
        try {
            const companies = await companiesService.getAllCompanies();
            return response.status(200).json(companies);
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async getOneCompany(request, response) {
        try {
            const company = await companiesService.getOneCompany(request.params.id);
            return response.status(200).json(company);
        } catch (error) {
            response.status(500).json(error)
        }
    }

    async upddateCompanyById(request, response) {
        try {
            const company = await companiesService.upddateCompanyById(request.body);
            return response.status(200).json(company);
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async deleteCompany(request, response) {
        try {
            const company = await companiesService.deleteCompany(request.params.id);
            return response.status(200).json(company);
        } catch(error) {
            response.status(500).json(error.message)
        }
    }
}

module.exports = new CompaniesController();