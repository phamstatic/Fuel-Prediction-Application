const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../App');
const FuelQuoteModule = require('../routes/FuelQuoteModule.js');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Fuel Quote Module', () => {
  describe('FuelQuoteModule Class', () => {
    it('1. Should Create a New Instance of FuelQuoteModule', () => {
      const quote = new FuelQuoteModule(100, '123 Main St', '2023-10-14');
      expect(quote).to.be.an.instanceOf(FuelQuoteModule);
    });

    it('2. Should Return 0 as the Suggested Price for a New Instance', () => {
      const quote = new FuelQuoteModule(100, '123 Main St', '2023-10-14');
      const suggestedPrice = quote.createQuote();
      expect(suggestedPrice).to.equal(0);
    });
  });

  describe('Express Routes', () => {
    it('3. Should Return a Suggested Price for a GET Request to /', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.suggestedPrice).to.equal(0);
          done();
        });
    });

    it('4. Should Create a New FuelQuoteModule Instance for a POST Request to /', (done) => {
      const user = {
        gallonsRequested: 100,
        deliveryAddress: '123 Main St',
        deliveryDate: '2023-10-14',
      };

      chai.request(app)
        .post('/')
        .send(user)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body.suggestedPrice).to.equal(0);
          done();
        });
    });
  });
});
