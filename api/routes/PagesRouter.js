const Router = require('express');
const router = new Router();
const pagesController = require('../controllers/PagesController');

router.post('/', pagesController.createPage);
router.post('/assessment', pagesController.saveAssessment);
router.get('/', pagesController.getAllPages);
router.get('/:id', pagesController.getOnePage);
router.put('/', pagesController.upddatePageById);
router.delete('/:id', pagesController.deletePage);
router.get('/assessment/:id', pagesController.getAsessments);


module.exports = router;