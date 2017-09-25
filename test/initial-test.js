const chai = require('chai');
const expect = chai.expect;

describe('basic assertion to test continuous integration and deployment pipeline', function() {
  it('should return true', done => {
    expect(!null).to.equal(true);
    done();
  });
});
