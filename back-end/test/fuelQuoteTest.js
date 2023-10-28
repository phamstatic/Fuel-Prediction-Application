var connection = require("../database/Database");
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../App');
chai.use(chaiHttp);
const expect = chai.expect;

describe('GET /PROFILE/QUOTE', () => {
    it('1. Get Handler for /Profile/Quote Route correctly works.', (done) => {
        chai.request(app)
            .get('/PROFILE/QUOTE')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.equal('GET HANDLER for /PROFILE/QUOTE route');
                done();
            });
    });
});

describe('POST /PROFILE/QUOTE', () => {
    it('2. Sending Fuel Quote information to database correctly works.', (done) => {
        const userData = {
            username: "testuser",
            gallonsRequested: 69,
            deliveryAddress: 'Street',
            deliveryDate: 'October 27th, 2023'
        };

        chai.request(app)
            .post('/Profile/Quote')
            .send(userData)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.message).to.equal(`Fuel quote information successfully quoted!`);
                done();
            });
    });
});