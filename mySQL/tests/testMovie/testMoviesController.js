/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
const expect = require('chai').expect;

const sqlData = require('../../movies/movieController');

describe('data', () => {
  it('show match id object ', async () => {
    const result = await sqlData.fetchMovieDataById(1);
    const expected = [{
      actorname: 'testactor',
      moviename: 'sholay',
      movieid: 1,
      status: 'superhit',
      image_url: '/test.jpg',
      description: 'test description',
      releaseYear: 2019,
    },
    ];
    expect(result).deep.equal(expected);
  });

  it('should return data of table', async () => {
    const result = await sqlData.getMovies();
    const expected = [{
      moviename: 'sholay',
      movieid: 1,
      actorname: 'testactor',
      releaseYear: 2019,
      image_url: '/test.jpg',
      status: 'superhit',
    }];
    expect(expected).eql(result);
  });
});
