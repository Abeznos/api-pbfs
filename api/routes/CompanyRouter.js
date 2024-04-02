const Router = require('express');
const router = new Router();
const companyController = require('../controllers/CompanyController.js');

router.post('/companies', companyController.createCompany);
router.get('/companies', companyController.getAllCompanies);
router.get('/companies/:id', companyController.getOneCompany);
router.put('/companies', companyController.upddateCompanyById);
router.delete('/companies/:id', companyController.deleteCompany);


module.exports =router;