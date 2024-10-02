const brandsService = require('../services/BrandsService');

class BrandsController {
    async createBrand(request, response) {
        try {
            const brand = await brandsService.createBrand(request.body);
            return response.status(201).json(brand);
        } catch(error) {
            response.status(500).json(error.message)
        }
    }

    async getAllBrands(request, response) {
        try {
            const brands = await brandsService.getAllBrands(request.query);
            return response.status(200).json(brands);
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async getOneBrand(request, response) {
        try {
            const brand = await brandsService.getOneBrand(request.params.id);
            return response.status(200).json(brand);
        } catch (error) {
            response.status(500).json(error)
        }
    }

    async upddateBrandById(request, response) {
        try {
            const brand = await brandsService.upddateBrandById(request.body);
            return response.status(200).json(brand);
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async deleteBrand(request, response) {
        try {
            const brand = await brandsService.deleteBrand(request.params.id);
            return response.status(200).json(brand);
        } catch(error) {
            response.status(500).json(error.message)
        }
    }
}

module.exports = new BrandsController();