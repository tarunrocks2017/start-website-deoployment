let HOST = 'localhost';
const DB_NAME = 'tarunDB';
let USERNAME = 'tarunharsh';
let PASS = 'TarunHarsh@123';


if (process.env.NODE_ENV === 'production') {
  HOST = 'tarunproddb.cjzgoon62qbp.us-east-2.rds.amazonaws.com';
  USERNAME = 'tarunProd198';
  PASS = 'tarunMount2019';
}

module.exports = {
  HOST,
  DB_NAME,
  USERNAME,
  PASS,
};
