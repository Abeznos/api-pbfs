const db = require('../db');
const { v4: uuidv4 } = require('uuid');

class AssessmentService {
    async saveAssessment(data) {
        //console.log(db)
        //console.log(process.env.TEST)

        const id = uuidv4();

        const { company, company_id, point, chanal, grade } = data
        const { name, phone, email, legal } = data.userData
        const answers = data.questions

        const assessment = await db.query('INSERT INTO assessments (assessment_id, company_name, company_id, point, chanal, grade) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [id, company, company_id, point, chanal, grade])
        return assessment.rows[0]
    }



}

module.exports = new AssessmentService();