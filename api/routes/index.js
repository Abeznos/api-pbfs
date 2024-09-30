const Router = require('express');
const router = new Router();
const companiesRouter = require('./CompaniesRouter');
const brandsRouter = require('./BrandsRouter');
const pointsRouter = require('./PointsRouter');
const pagesRouter = require('./PagesRouter');
const assessmentRouter = require('./AssessmentRouter');

router.use('/companies', companiesRouter);
router.use('/brands', brandsRouter);
router.use('/points', pointsRouter);
router.use('/pages', pagesRouter);
router.use('/assessment', assessmentRouter);

module.exports = router;