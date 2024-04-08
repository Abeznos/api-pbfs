const Router = require('express');
const router = new Router();
const pagesController = require('../controllers/PagesController');

router.post('/', pagesController.createPage);
router.get('/', pagesController.getAllPages);
router.get('/:id', pagesController.getOnePage);
router.put('/', pagesController.upddatePageById);
router.delete('/:id', pagesController.deletePage);


module.exports = router;