const db = require('../db');
const { v4: uuidv4 } = require('uuid');


const generateJwt = () => {
        
}

class UsersService {
    async createUser(data) {
        const { user_name, email, phone, password, role, company_id, brand_id } = data;
        const id = uuidv4();
        const user = await db.query('INSERT INTO users (user_id, user_name, email, phone, password, role, company_id, brand_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *', 
        [id, user_name, email, password, role, company_id, brand_id]);
        return brand.rows[0];
    }

    async getAllUsers(query) {
        const { company_id, brand_id } = query;
        if (!company_id && brand_id) {
            const users = await db.query('SELECT * FROM users WHERE brand_id = $1', [brand_id]);
            return users.rows
        } else if (company_id && !brand_id || company_id && brand_id) {
            const users = await db.query('SELECT * FROM users WHERE company_id = $1', [company_id]);
            return users.rows
        } else {
            const users = await db.query('SELECT * FROM users ORDER BY point_id ASC');
            return users.rows;
        }
    }

    async getOneUser(id) {
        if (!id) {
            throw new Error('Не указан Id пользователя');
        }
        const user = await db.query('SELECT * FROM users WHERE user_id = $1', [id]);
        return user.rows[0];
     }

    async updateUser(id) {
        if (!id) {
            throw Error('Не указан Id пользователя');
        }

        const user = await db.query('UPDATE users SET user_name = $1, email = $2, phone = $3, password = $4, role = $5 WHERE user_id = $6 RETURNING *',
        [user_name, email, phone, password, role, user_id]);
        return user.rows[0];
    }

    async deleteUser(id) {
        if (!id) {
            throw new Error('Не указан Id пользователя');
        }
        const user = await db.query('DELETE FROM users WHERE user_id = $1', [id]);
        return user.rows[0]
     }

    async login() {
    }

    async checkUser() {
    }   

}

module.exports = new UsersService();