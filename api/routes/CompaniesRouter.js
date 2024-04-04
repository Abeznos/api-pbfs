const Router = require('express');
const router = new Router();
const companiesController = require('../controllers/CompaniesController');

router.post('/', companiesController.createCompany);
router.get('/', companiesController.getAllCompanies);
router.get('/:id', companiesController.getOneCompany);
router.put('/', companiesController.upddateCompanyById);
router.delete('/:id', companiesController.deleteCompany);


module.exports = router;