const Router = require('express');
const router = new Router();
const companyController = require('../controllers/company.controller');

router.post('/companies', db.createCompany);
router.get('/companies', db.getCompanies);
router.get('/companies/:id', db.getCompanyByID);
router.delete('/companies/:id', db.deleteCompany);
router.put('/companies', db.updateCompany);

module.exports = router