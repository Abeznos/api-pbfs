const assessmentService = require('../services/AssessmentService');

class AssessmentController {
    async saveAssessment(request, response) {
        try {
            const assessment = await assessmentService.saveAssessment(request.body);
            return response.status(201).json(assessment);
        } catch(error) {
            response.status(500).json(error.message)
        }

    }
}

module.exports = new AssessmentController();