const db = require('../db');
const { v4: uuidv4 } = require('uuid');

class PagesService {
    async createPage(data) {
        const { page_settings, company_id, brand_id, point_id, created_date, updated_date } = data;
        const id = uuidv4();
        const page = await db.query('INSERT INTO pages (page_id, page_settings, company_id, brand_id, point_id, created_date, updated_date) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', 
        [id, page_settings, company_id, brand_id, point_id, created_date, updated_date]);
        return page.rows[0];
    }

    async getAllPages(query) {
        const { company_id, brand_id } = query;
        if (!company_id && brand_id) {
            const pages = await db.query('SELECT * FROM pages WHERE brand_id = $1', [brand_id]);
            return pages.rows
        } else if (company_id && !brand_id || company_id && brand_id) {
            const pages = await db.query('SELECT * FROM pages WHERE company_id = $1', [company_id]);
            return pages.rows
        } else {
            const pages = await db.query('SELECT * FROM pages ORDER BY page_id ASC');
            return pages.rows;
        }
    }

    async getOnePage(id) {
       if (!id) {
           throw new Error('Не указан Id страницы');
       }
       const page = await db.query('SELECT * FROM pages WHERE page_id = $1', [id]);
       return page.rows[0];
    }

    async upddatePageById(data) {
       if (!data.page_id) {
           throw new Error('Не указан Id страницы');
       }
       const { page_id, page_settings } = data;

       const page = await db.query('UPDATE pages SET page_settings = $1 WHERE page_id = $2 RETURNING *', 
       [page_settings, page_id]);
       return page.rows[0];
    }

    async deletePage(id) {
       if (!id) {
           throw new Error('Не указан Id страницы');
       }
       const page = await db.query('DELETE FROM pages WHERE page_id = $1', [id]);
       return page.rows[0]
    }

    async saveAssessment(data) {
        let fields = {};
        let additions = {};
        const { questions, point, company, assessmentType, chanal } = data;

        if(data.inputs.length > 0) {
            data.inputs.forEach((el) => {
                switch(true) {
                    case el.name == "Name":
                        fields['name'] = el.value
                        break
                    case el.name == "Phone":
                        fields['phone'] = el.value
                        break
                    case el.name == "Email":
                        fields['email'] = el.value
                        break
                    case el.name == "Legal":
                        fields['legal'] = el.value
                        break
                }
            });
        }

        additions['elements'] = data.additions
        additions['text'] = data.additionsText
        
        const id = uuidv4();

        const assessment = await db.query('INSERT INTO assessment (assessment_id, assessment_data) VALUES ($1, $2) RETURNING *', 
        [id, {fields, questions, additions, point, company, assessmentType, chanal}]);
        return assessment.rows[0];
    }

    async getAsessments(assessment_id) {
        console.log(assessment_id)
        //const assessments = await db.query('SELECT * FROM assessment WHERE assessment_id = $1', [assessment_id]);
        //return assessments.rows;
    }
}

module.exports = new PagesService();