/* eslint-env mode, mocha, http, chai */
const { expect } = require('chai');

const sqlData = require('../../actors/actorController');

describe('data', () => {
  it('show match id object ', async () => {
    try {
      const result = await sqlData.fetchActorDataById(1);
      const expected = [{
        moviename: 'sholay',
        movieid: 1,
        actorname: 'testactor',
        activeyear: '2019',
        totalmovies: 123,
        image_url: '/testactor.jpg',
      }];
      expect(result).deep.equal(expected);
    } catch (err) {
      throw err;
    }
  });

  it('should return data of table', async () => {
    try {
      const result = await sqlData.getActors();
      const expected = [{
        moviename: 'sholay',
        movieid: 1,
        actorid: 1,
        actorname: 'testactor',
        activeYear: '2019',
        image_url: '/testactor.jpg',
        totalmovies: 123,
      }];
      expect(expected).eql(result);
    } catch (err) {
      throw err;
    }
  });
});
