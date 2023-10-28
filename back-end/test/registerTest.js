var connection = require("../database/Database");
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../App');
chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /REGISTER', () => {
    it('1. Get Handler for /Register Route correctly works.', (done) => {
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
    it('2. Username is already taken.', (done) => {
        const userData = {
            username: 'admin',
            password: 'password',
        };

        chai.request(app)
            .post('/REGISTER')
            .send(userData)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body.message).to.equal(`Username already taken! Please try again.`);
                done();
            });
    }).timeout(0);

    it('3. User is successfully registered.', (done) => {
        const userData = {
            username: 'testuser',
            password: 'testpassword',
        };

        connection.query(`SELECT 1 FROM login WHERE username = '${userData.username}';`, (err, result) => {
            if (err) throw err;
            else if (result.length > 0) {
                connection.query(`DELETE FROM login WHERE username = '${userData.username}';`, (err, result) => {
                    if (err) throw err;
                });
            }
        });

        chai.request(app)
            .post('/REGISTER')
            .send(userData)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.message).to.equal(`Successfully registered!`);
                done();
            });
    });
});
