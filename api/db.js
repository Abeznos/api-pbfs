const Pool = require('pg').Pool;

const pool = new Pool({
  user: "default",
  password: "3dxnbF7XkQgu",
  host: "ep-delicate-limit-a2izpwb3-pooler.eu-central-1.aws.neon.tech",
  port: "5432",
  database: "verceldb"
});


module.exports = pool;

//const { Pool } = pg;
//
//const pool = new Pool({
//  connectionString: process.env.POSTGRES_URL ,
//})