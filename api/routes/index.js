const Router = require('express');
const router = new Router();
const companyRouter = require('./CompanyRouter');

router.use('/companies', companyRouter);

module.exports = router;