require('dotenv').config();

const Pool = require('pg').Pool
const pool = new Pool({
  connectionString: "postgres://default:3dxnbF7XkQgu@ep-delicate-limit-a2izpwb3-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require"
});


module.exports = pool;