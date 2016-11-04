// Import Chai
import chai from 'chai';

import { Location } from '../src/js/model/location.js'
// Import Any Files to Test

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

  describe('Testing classes', function () {

    it('should be a place made with class Location', function () {
      let cave = new Location ('forest', [1,2,3], 1);
      expect(cave).to.be.an.instanceof(Object);
    });

  });
