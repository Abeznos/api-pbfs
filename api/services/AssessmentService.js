const db = require('../db');
const { v4: uuidv4 } = require('uuid');

class AssessmentService {
    async saveAssessment(data) {
        console.log(data)

        const id = uuidv4();
        const { company, point, chanal, grade } = data
        const { name, phone, email, legal } = data.userData

        const assessment = await db.query('INSERT INTO assessments (assessment_id, company_id, point, chanal, grade, buyer_phone, buyer_name, buyer_email, buyer_comment, legal_approved) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
        [id, company, point, chanal, grade, phone, name, email, data.comment, legal])
        console.log(assessment.rows[0])


        for(const el of data.questions) {
            const answer = await db.query('INSERT INTO assessments_answers (assessment_id, question, grade) VALUES ($1, $2, $3) RETURNING *',
            [id, el.questionName, el.questionValue])
            console.log(answer.rows[0])
        } 
    }
}

module.exports = new AssessmentService();