/* eslint-env mode, mocha, http, chai */
const request = require('supertest');

describe('ActorRoute', () => {
  it('should return Actor home page', (done) => {
    request('http://localhost:8080')
      .get('/actors')
      .expect(200)
      .expect(/testactor/, done);
  });

  it('should return actor with id ', (done) => {
    request('http://localhost:8080')
      .get('/actors/1')
      .expect('Content-type', /json/)
      .expect(200)
      .expect(/testactor/, done);
  });
});
