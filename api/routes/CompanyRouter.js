const Router = require('express');
const router = new Router();
const companyController = require('../controllers/CompanyController');

router.post('/', companyController.createCompany);
router.get('/', companyController.getAllCompanies);
router.get('/:id', companyController.getOneCompany);
router.put('/', companyController.upddateCompanyById);
router.delete('/:id', companyController.deleteCompany);


module.exports = router;