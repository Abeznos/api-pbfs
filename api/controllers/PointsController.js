const pointsService = require('../services/PointsService');

class PointsController {
    async createPoint(request, response) {
        try {
            const point = await pointsService.createPoint(request.body);
            return response.status(201).json(point);
        } catch(error) {
            response.status(500).json(error.message)
        }
    }

    async getAllPoints(request, response) {
        try {
            const points = await pointsService.getAllPoints(request.query);
            return response.status(200).json(points);
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async getOnePoint(request, response) {
        try {
            const point = await pointsService.getOnePoint(request.params.id);
            return response.status(200).json(point);
        } catch (error) {
            response.status(500).json(error)
        }
    }

    async upddatePointById(request, response) {
        try {
            const point = await pointsService.upddatePointById(request.body);
            return response.status(200).json(point);
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async deletePoint(request, response) {
        try {
            const point = await pointsService.deletePoint(request.params.id);
            return response.status(200).json(point);
        } catch(error) {
            response.status(500).json(error.message)
        }
    }
}

module.exports = new PointsController();