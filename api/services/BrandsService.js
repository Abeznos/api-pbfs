const db = require('../db');
const { v4: uuidv4 } = require('uuid');

class BrandsService {
    async createBrand(data) {
        const { brand_name, logo, company_id } = data;
        const id = uuidv4();
        const brand = await db.query('INSERT INTO brands (brand_id, brand_name, logo, company_id) VALUES ($1, $2, $3, $4) RETURNING *', 
        [id, brand_name, logo, company_id]);
        return brand.rows[0];
    }

    async getAllBrands(query) {
        const { company_id } = query;
        if (!company_id) {
            const brands = await db.query('SELECT * FROM brands ORDER BY brand_id ASC');
            return brands.rows;
        } else {
            const brands = await db.query('SELECT * FROM brands WHERE company_id = $1', [company_id]);
            return brands.rows
        }
    }

    async getOneBrand(id) {
       if (!id) {
           throw new Error('Не указан Id бренда');
       }
       const brand = await db.query('SELECT * FROM brands WHERE brand_id = $1', [id]);
       return brand.rows[0];
    }

    async upddateBrandById(data) {
       if (!data.brand_id) {
           throw new Error('Не указан Id компании');
       }
       const { brand_id, brand_name, logo} = data;

       const brand = await db.query('UPDATE brands SET brand_name = $1, logo = $2 WHERE brand_id = $3 RETURNING *', 
       [brand_name, logo, brand_id]);
       return brand.rows[0];
    }

    async deleteBrand(id) {
       if (!id) {
           throw new Error('Не указан Id компании');
       }
       const brand = await db.query('DELETE FROM brands WHERE brand_id = $1', [id]);
       return brand.rows[0]
    }
}

module.exports = new BrandsService();