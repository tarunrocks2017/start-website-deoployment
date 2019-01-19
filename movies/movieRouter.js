const router = require('express').Router();

const controller = require('./movieController');

router.get('/movies', async (req, res) => {
  try {
    const movies = await controller.getMovies();
    res.json(movies);
  } catch (error) {
    res.send(error);
  }
});

router.get('/movies/:id', async (req, res) => {
  try {
    const movies = await controller.fetchMovieDataById(req.params.id);
    res.json(movies);
  } catch (error) {
    res.send(error);
  }
});

router.get('/deleteMovie/:id', async (req, res) => {
  try {
    const deletedRow = await controller.removeMovieById(req.params.id);
    if (deletedRow.affectedRows > 0) {
      res.json(true);
    } else {
      res.json(500);
    }
  } catch (error) {
    res.send(error);
  }
});

router.post('/addMovie', async (req, res) => {
  try {
    const movie = {
      moviename: req.body.moviename,
      releaseYear: req.body.releaseYear,
      status: req.body.status,
      image_url: req.body.image,
      actorname: req.body.actorname,
      description: req.body.description,
    };
    const result = await controller.addMovie(movie);
    if (result.affectedRows > 0) {
      const newlyAddedMovie = await controller.getNewlyAddedMovie(movie.moviename);
      res.json(newlyAddedMovie);
    } else {
      res.json(false);
    }
  } catch (error) {
    throw error;
  }
});
router.post('/editMovie', async (req, res) => {
  try {
    const movieData = await controller.getMovieById(req.body.id);
    res.json(movieData);
  } catch (error) {
    throw error;
  }
});

router.put('/updateMovie', async (req, res) => {
  const movie = {
    moviename: req.body.moviename,
    status: req.body.status,
    image_url: req.body.image_url,
    actorname: req.body.actorname,
    description: req.body.description,
    releaseYear: req.body.releaseYear,
  };
  try {
    const updatedRow = await controller.updateMovieById(req.body.id, movie);
    if (updatedRow.affectedRows > 0) {
      const result = await controller.getNewlyAddedMovie(req.body.moviename);
      res.json(result);
    } else {
      res.json(false);
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
