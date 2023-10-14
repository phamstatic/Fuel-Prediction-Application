const app = require("../App");
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

/*
describe('Login Tests', function(){
    let user1 = {
        username: "",
        password: ""
    }

    it('1. Attempt Login With Proper Account', function(done){
        user1.username = "admin";
        user1.password = "password";

        const oldUserResponse = request(app).post("/login").send({
            username: user1.username,
            password: user1.password,
        });

        expect(oldUserResponse.statusCode).toBe(200);
        done();
    });
});
*/
chai.use(chaiHttp);

describe('Authentication', () => {
  it('should authenticate a valid user', () => {
    const result = Authentication('john', 'pham');
    expect(result.authenticated).to.equal(true);
    expect(result.firstLogin).to.equal(true); // Since it's the first login
  });

  it('should reject invalid credentials', () => {
    const result = Authentication('nonexistent', 'password');
    expect(result.authenticated).to.equal(false);
  });
});

describe('POST /login', () => {
  it('should return a successful login response', (done) => {
    chai
      .request(app)
      .post('/login')
      .send({ username: 'john', password: 'pham' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Login Successful');
        expect(res.body.firstLogin).to.equal(false); // Not first login
        done();
      });
  });

  it('should return an error response for invalid credentials', (done) => {
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