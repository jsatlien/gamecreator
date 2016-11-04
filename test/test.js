// Import Chai
import chai from 'chai';

import { Location, Game } from '../src/js/model/location.js'
// Import Any Files to Test

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

  describe('Testing classes', function () {

    it('should be a place made with class Location', function () {
      let cave = new Location ('forest', [1,2,3], 1);
      expect(cave).to.be.an.instanceof(Location);
    });

    it('should correctly load the Game class', function () {
      let newGame = new Game (1, 3);
      expect(newGame).to.be.an.instanceof(Game);

    })
  });
