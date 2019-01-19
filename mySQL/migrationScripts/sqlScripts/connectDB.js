const sql = require('promise-mysql');
const config = require('../../config/config');

async function getConnection() {
  const connection = await sql.createConnection({
    host: config.HOST,
    user: config.USERNAME,
    password: config.PASS,
    database: process.env.DB_NAME || config.DB_NAME,
  });
  return connection;
}

module.exports = {
  getConnection,
};
