// Import Chai
import chai from 'chai';

import { Location, Game } from '../src/js/model/location.js';
import { Choices } from '../src/js/model/choices.js';
// Import Any Files to Test

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

  describe('Testing classes to be sure they are being built correctly.', function () {

    it('should be a place made with class Location', function () {
      let cave = new Location ('forest', [1,2,3], 1);
      expect(cave).to.be.an.instanceof(Location);
    });

    it('should correctly load the Game class', function () {
      let newGame = new Game (1, 3);
      expect(newGame).to.be.an.instanceof(Game);
    });

    it('should give the location class some choices with 3 provided options', function () {
      let startOptions = {
        option1: 'You go to school.',
        option2: 'You stay home and eat cookies.',
        option3: 'You pose as the Sausage King of Chicago and get a free lunch.'
      }
      let image = 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Chicago_skyline,_viewed_from_John_Hancock_Center.jpg'
      let choiceTest = new Location ('Chicago', [1,2,3], 2, image, startOptions)
      expect(choiceTest).to.be.an.instanceof(Location);
    })

  });
