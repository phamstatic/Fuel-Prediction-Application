const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../App');
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /orders', () => {
  it('1. Should Return an Array of Orders', (done) => {
    chai
      .request(app)
      .get('/orders')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');

        expect(res.body[0]).to.have.property('id').that.is.a('number');
        expect(res.body[0]).to.have.property('fuelAmount').that.is.a('number');
        expect(res.body[0]).to.have.property('profitMargin').that.is.a('number');
        expect(res.body[0]).to.have.property('totalCost').that.is.a('number');
        expect(res.body[0]).to.have.property('address').that.is.a('string');
        expect(res.body[0]).to.have.property('date').that.is.a('string');

        done();
      });
  });
});
