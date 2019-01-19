const con = require('./connectDB');

async function dropDB() {
  const connection = await con.getConnection();
  await connection.query('drop database testDB');
}

dropDB().then(() => {
  // eslint-disable-next-line no-console
  console.log('test database deleted');
});
