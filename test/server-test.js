const chai = require('chai');
const expect = chai.expect;
const request = require('superagent');
const serverCtrl = require('./lib/server-ctrl');
const server = require('../index');

const PORT = process.env.PORT || 5000;
const url = `http://localhost:${PORT}`;

describe('Server test', function() {
  before(done => serverCtrl.serverUp(server, done));
  after(done => serverCtrl.serverDown(server, done));
  describe('#GET /epic', function() {
    it('should respond with status 200', done => {
      request
        .get(`${url}/epic`)
        .send({})
        .end((err, res) => {
          if (err) return done(err);
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should respond with a body', done => {
      request
        .get(`${url}/epic`)
        .send({})
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.include({ epic: 'BACON STRIPS N BACON STRIPS N BACON STRIPS!' });
          done();
        });
    });
  });
});
