const Router = require('express');
const router = new Router();
const pointsController = require('../controllers/PointsController');

router.post('/', pointsController.createPoint);
router.get('/', pointsController.getAllPoints);
router.get('/:id', pointsController.getOnePoint);
router.put('/', pointsController.upddatePointById);
router.delete('/:id', pointsController.deletePoint);


module.exports = router;