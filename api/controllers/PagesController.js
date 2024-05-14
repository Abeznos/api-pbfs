const pagesService = require('../services/PagesService');

class PagesController {
    async createPage(request, response) {
        try {
            const page = await pagesService.createPage(request.body);
            return response.status(201).json(page);
        } catch(error) {
            response.status(500).json(error.message)
        }
    }

    async getAllPages(request, response) {
        try {
            const pages = await pagesService.getAllPages(request.query);
            return response.status(200).json(pages);
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async getOnePage(request, response) {
        try {
            const page = await pagesService.getOnePage(request.params.id);
            return response.status(200).json(page);
        } catch (error) {
            response.status(500).json(error)
        }
    }

    async upddatePageById(request, response) {
        try {
            const page = await pagesService.upddatePageById(request.body);
            return response.status(200).json(page);
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async deletePage(request, response) {
        try {
            const page = await pagesService.deletePage(request.params.id);
            return response.status(200).json(page);
        } catch(error) {
            response.status(500).json(error.message)
        }
    }
}

module.exports = new PagesController();