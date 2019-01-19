const sql = require('./connectDB');

const CREATE_TABLE_MOVIES = `create table movies ( movieid int not null auto_increment ,
    moviename varchar(50),status varchar(50),image_url varchar(50), actorname varchar(50),description varchar(5000)
    ,releaseYear int(11), primary key(movieid))`;

const CREATE_TABLE_ACTORS = `create table actors(actorid int(11) not null auto_increment,
actorname varchar(50), movieid int(11), activeYear varchar(50), image_url varchar(50), 
totalmovies int(11), primary key(actorid), foreign key(movieid) references movies(movieid))`;


async function createTable(query) {
  const connection = await sql.getConnection();
  await connection.query(query);
  await connection.end();
}
createTable(CREATE_TABLE_MOVIES).then(() => {
  createTable(CREATE_TABLE_ACTORS);
});
