const con = require('../migrationScripts/sqlScripts/connectDB');

const API = require('./movieService');

const SELECT_FROM_MOVIES = 'select movieid,moviename,status ,image_url,actorname,releaseYear from movies';


const INSERT_INTO_MOVIES = 'insert into movies(moviename,status,image_url,actorname,description,releaseYear) values(?,?,?,?,?,?)';

const UPDATE_INTO_MOVIES = 'update movies set moviename = ?, status = ?, image_url = ?, actorname = ? , description = ?, releaseyear = ? where movieid = ?';

const SELECT_FROM_MOVIES_BY_ID = `select ac.actorname , moviename , m.movieid , status , releaseYear
,m.image_url , m.description from movies m right join actors ac on ac.movieid = m.movieid where m.movieid = ?`;


async function getMovies() {
  try {
    const connection = await con.getConnection();
    const result = await connection.query(SELECT_FROM_MOVIES);
    await connection.end();
    return result;
  } catch (error) {
    return error;
  }
}
async function getNewlyAddedMovie(moviename) {
  try {
    const connection = await con.getConnection();
    const query = await connection.format('select * from movies where moviename = ?', [moviename]);
    const result = await connection.query(query);
    return result;
  } catch (error) {
    throw error;
  }
}

async function getMovieById(id) {
  const connection = await con.getConnection();
  const format = await connection.format('select * from movies where movieid = ?', [id]);
  const result = await connection.query(format);
  return result;
}
async function fetchMovieDataById(id) {
  try {
    const connection = await con.getConnection();
    const formatQuery = await connection.format(SELECT_FROM_MOVIES_BY_ID, [parseInt(id, 10)]);
    const result = await connection.query(formatQuery);
    if (result[0].length === 0) {
      return 'result is empty';
    }
    // result[0].rating = await API.getRating(result[0].moviename);
    // console.log(result[0].rating);
    return result;
  } catch (error) {
    return error;
  }
}
async function removeMovieById(id) {
  try {
    const connection = await con.getConnection();
    const formatQuery = await connection.format('delete from movies where movieid = ?', [id]);
    const result = await connection.query(formatQuery);
    await connection.end();
    return result;
  } catch (error) {
    return error;
  }
}
async function addMovie(movieObject) {
  try {
    const connection = await con.getConnection();
    const movie = [
      movieObject.moviename,
      movieObject.status,
      movieObject.image_url,
      movieObject.actorname,
      movieObject.description,
      movieObject.releaseYear,

    ];
    const formatQuery = await connection.format(INSERT_INTO_MOVIES, movie);
    const result = await connection.query(formatQuery);
    return result;
  } catch (error) {
    return error;
  }
}
async function updateMovieById(id, movieObject) {
  try {
    const connection = await con.getConnection();
    const MovieInfo = [
      movieObject.moviename,
      movieObject.status,
      movieObject.image_url,
      movieObject.actorname,
      movieObject.description,
      movieObject.releaseYear,
      id,
    ];
    const formatQuery = await connection.format(UPDATE_INTO_MOVIES, MovieInfo);
    const result = await connection.query(formatQuery);
    return result;
  } catch (error) {
    return error;
  }
}
module.exports = {
  getMovies,
  removeMovieById,
  addMovie,
  updateMovieById,
  getNewlyAddedMovie,
  getMovieById,
  fetchMovieDataById,
};
