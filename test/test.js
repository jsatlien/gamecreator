// Import Chai
import chai from 'chai';

// Import Any Files to Test

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

  describe('Testing the Creation of Something', function () {

    it('should exist after we create it', function () {
      let x = new Object;
      expect(x).to.be.an.instanceof(Object);
    });

  });
