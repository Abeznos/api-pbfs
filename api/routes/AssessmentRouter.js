const Router = require('express');
const router = new Router();
const assessmentController = require('../controllers/AssessmentController')

router.post('/save', assessmentController.saveAssessment);


module.exports = router;