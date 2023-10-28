var connection = require("../database/Database");
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../App');
chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /PROFILE', () => {
    it('1. Get Handler for /Profile Route correctly works.', (done) => {
        chai.request(app)
            .get('/PROFILE')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('GET HANDLER for /PROFILE route');
                done();
            });
    });
});
