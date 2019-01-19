/* eslint-env mode, mocha, http, chai */
const request = require('supertest');

describe('MovieRoute', () => {
  it('should return movie home page', (done) => {
    request('http://localhost:8080')
      .get('/movies')
      .expect(200)
      .expect(/sholay/, done);
  });

  it('should return movie with id ', (done) => {
    request('http://localhost:8080')
      .get('/movies/1')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(/sholay/, done);
  });

  it('should show 404', (done) => {
    request('http://localhost:8080')
      .get('/fghfghgf')
      .expect(404, done);
  });
});
