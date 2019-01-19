const express = require('express');
const cors = require('cors');

const app = express();

const bodyparser = require('body-parser');

app.use(express.static(`${__dirname}/public`));

const movieRoute = require('./movies/movieRouter');
const actorRoute = require('./actors/actorRouter');

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());
app.use(movieRoute);
app.use(actorRoute);


app.listen(8080, () => {
});
