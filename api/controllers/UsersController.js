const usersService = require('../services/UsersService');

class UsersController {
    async createUser(request, response) {
        try {
            const user = await usersService.createUser(request.body);
            return response.status(201).json(user);
        } catch(error) {
            response.status(500).json(error.message)
        }
    }

    async getAllUsers(request, response) {
        try {
            const users = await usersService.getAllUsers(request.query);
            return response.status(200).json(users);
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async getOneUser(request, response) {
        try {
            const user = await usersService.getOneUser(request.params.id);
            return response.status(200).json(user);
        } catch (error) {
            response.status(500).json(error)
        }
    }

    async upddateUserById(request, response) {
        try {
            const user = await usersService.upddateUserById(request.body);
            return response.status(200).json(user);
        } catch (error) {
            response.status(500).json(error.message)
        }
    }

    async deleteUser(request, response) {
        try {
            const user = await usersService.deleteUser(request.params.id);
            return response.status(200).json(user);
        } catch(error) {
            response.status(500).json(error.message)
        }
    }
}

module.exports = UsersController();