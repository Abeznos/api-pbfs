const db = require('../db');
const { v4: uuidv4 } = require('uuid');

class AssessmentService {
    async saveAssessment(data) {
        const id = uuidv4();
        
        console.log(data)
        return data
    }

}

module.exports = new AssessmentService();