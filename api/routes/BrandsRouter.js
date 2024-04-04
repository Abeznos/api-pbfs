const Router = require('express');
const router = new Router();
const brandsController = require('../controllers/BrandsController');

router.post('/', brandsController.createBrand);
router.get('/', brandsController.getAllBrands);
router.get('/:id', brandsController.getOneBrand);
router.put('/', brandsController.upddateBrandById);
router.delete('/:id', brandsController.deleteBrand);


module.exports = router;