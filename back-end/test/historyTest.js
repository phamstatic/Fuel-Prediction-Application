var connection = require("../database/Database");
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../App');
chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /HISTORY', () => {
    it('1. Get Handler for /History Route correctly works.', (done) => {
        chai.request(app)
            .get('/HISTORY')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body[0]).to.have.property('username').that.is.a('string');
                expect(res.body[0]).to.have.property('requested').that.is.a('number');
                expect(res.body[0]).to.have.property('delivAddress').that.is.a('string');
                expect(res.body[0]).to.have.property('delivDate').that.is.a('string');
                expect(res.body[0]).to.have.property('suggPrice').that.is.a('number');
                done();
            });
    });
});