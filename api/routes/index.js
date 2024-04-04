const Router = require('express');
const router = new Router();
const companiesRouter = require('./CompaniesRouter');
const brandsRouter = require('./BrandsRouter');
const pointsRouter = require('./PointsRouter');

router.use('/companies', companiesRouter);
router.use('/brands', brandsRouter);
router.use('/points', pointsRouter);

module.exports = router;