const app = require("../App");
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;

const Authentication = require('../routes/Login.js');



describe('Authentication', () => {
  it('1. Should Authenticate a Valid User', () => {
    const result = Authentication('john', 'pham');
    expect(result.authenticated).to.equal(true);
    expect(result.firstLogin).to.equal(true);
  });

  it('2. Should Reject Invalid Credentials', () => {
    const result = Authentication('nonexistent', 'password');
    expect(result.authenticated).to.equal(false);
  });
});

describe('POST /login', () => {
  it('3. Should Return a Successful Login Response', (done) => {
    chai
      .request(app)
      .post('/login')
      .send({ username: 'john', password: 'pham' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Login Successful');
        done();
      });
  });

  it('4. Should Return an Error Response for Invalid Credentials', (done) => {
    chai
      .request(app)
      .post('/login')
      .send({ username: 'nonexistent', password: 'password' })
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.message).to.equal('Invalid Credentials');
        done();
      });
  });
});