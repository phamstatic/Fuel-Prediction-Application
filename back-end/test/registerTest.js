const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../App');
chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /REGISTER', () => {
  it('1. Should Respond with "GET HANDLER for /REGISTER route"', (done) => {
    chai.request(app)
      .get('/REGISTER')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('GET HANDLER for /REGISTER route');
        done();
      });
  });
});

describe('POST /REGISTER', () => {
  it('2. Should Log User Information', (done) => {
    const userData = {
      username: 'testuser',
      password: 'testpassword',
    };

    chai.request(app)
      .post('/REGISTER')
      .send(userData)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal(`User ${userData.username} registered with password ${userData.password}`);
        done();
      });
  });
});
