const db = require('../db');
const { v4: uuidv4 } = require('uuid');

class PointsService {
    async createPoint(data) {
        const { point_name, adress, loyalty_link, yandex_link, _2gis_link, google_link, company_id, brand_id } = data;
        const id = uuidv4();
        const point = await db.query('INSERT INTO points_of_sale (point_id, point_name, adress, loyalty_link, yandex_link, _2gis_link, google_link, company_id, brand_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', 
        [id, point_name, adress, loyalty_link, yandex_link, _2gis_link, google_link, company_id, brand_id]);
        return point.rows[0];
    }

    async getAllPoints(query) {
        const { company_id, brand_id } = query;
        if (!company_id && brand_id) {
            const points = await db.query('SELECT * FROM points_of_sale WHERE brand_id = $1', [brand_id]);
            return points.rows
        } else if (company_id && !brand_id || company_id && brand_id) {
            const points = await db.query('SELECT * FROM points_of_sale WHERE company_id = $1', [company_id]);
            return points.rows
        } else {
            const points = await db.query('SELECT * FROM points_of_sale ORDER BY point_id ASC');
            return points.rows;
        }
    }

    async getOnePoint(id) {
       if (!id) {
           throw new Error('Не указан Id точки продаж');
       }
       console.log(id)
       const point = await db.query('SELECT * FROM points_of_sale WHERE point_id = $1', [id]);
       return point.rows[0];
    }

    async upddatePointById(data) {
       if (!data.point_id) {
           throw new Error('Не указан Id точки продаж');
       }
       const { point_id, point_name, adress, loyalty_link, yandex_link, _2gis_link, google_link } = data;
       
       const point = await db.query('UPDATE points_of_sale SET point_name = $1, adress = $2, loyalty_link = $3, yandex_link = $4, _2gis_link = $5, google_link = $6 WHERE point_id = $7 RETURNING *', 
       [point_name, adress, loyalty_link, yandex_link, _2gis_link, google_link, point_id]);
       return point.rows[0];
    }

    async deletePoint(id) {
       if (!id) {
           throw new Error('Не указан Id компании');
       }
       const point = await db.query('DELETE FROM points_of_sale WHERE point_id = $1', [id]);
       return point.rows[0]
    }
}

module.exports = new PointsService();