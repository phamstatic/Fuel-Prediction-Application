var connection = require("../database/Database");
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../App');
chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /LOGIN', () => {
    it('1. Get Handler for /LOGIN Route correctly works.', (done) => {
        chai.request(app)
            .get('/LOGIN')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('GET HANDLER for /LOGIN route');
                done();
            });
    });
});

describe('POST /LOGIN', () => {
    it('2. Attempting to login with incorrect username.', (done) => {
        const userData = {
            username: 'npc',
            password: 'password',
        };

        chai.request(app)
            .post('/LOGIN')
            .send(userData)
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body.message).to.equal('Username not found.');
                expect(res.body.success).to.equal(false);
                done();
            });
    });

    it('3. Attempting to login with incorrect password.', (done) => {
        const userData = {
            username: 'admin', 
            password: 'wrongpassword', 
        };
    
        chai.request(app)
            .post('/LOGIN')
            .send(userData)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body.message).to.equal("Incorrect password.");
                done();
            });
    });

    it('4. No username provided.', (done) => {
        const userData = {
            password: 'somepassword',
        };

        chai.request(app)
            .post('/LOGIN')
            .send(userData)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body.message).to.equal("Username is required.");
                done();
            });
    });

    it('5. No password provided.', (done) => {
        const userData = {
            username: 'user1',
        };

        chai.request(app)
            .post('/LOGIN')
            .send(userData)
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body.message).to.equal("Password is required.");
                done();
            });
    });
});