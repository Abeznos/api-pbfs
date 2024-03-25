const Router = require('express');
const router = new Router();
const userController = require('../controller/companies.controller');

router.post('/companies', userController.createCompany);
router.get('/companies', userController.getAllCompaies);
router.get('/companies/:id', userController.getCompany);
router.put('/companies', userController.updateCompany);
router.delete('/companies/:id', userController.deleteCompany);

module.exports = router;
