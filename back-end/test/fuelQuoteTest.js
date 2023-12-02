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

describe('POST /PROFILE/QUOTE/SUGGEST', () => {
    it('2. Sending Fuel Quote information to Fuel Quote Module correctly works.', (done) => {
        const userData = {
            username: "testuser",
            gallonsRequested: 69,
            deliveryAddress: 'Street',
            deliveryDate: 'October 27th, 2023'
        };

        chai.request(app)
            .post('/Profile/Quote/Suggest')
            .send(userData)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.message).to.equal(`Fuel quote information successfully quoted!`);
                done();
            });
    });
});

class FuelQuoteModule {
    constructor(username, gallonsRequested, deliveryAddress, deliveryDate, state) {
        this.username = username;
        this.gallonsRequested = gallonsRequested;
        this.deliveryAddress = deliveryAddress;
        this.deliveryDate = deliveryDate;
        this.suggestedPrice = 0;
        this.state  = state;
        this.gallonFactor = .02;
        this.historyFactor = 0;
        this.locationFactor = .02;
    }
    createQuote(history) {
        if(this.gallonsRequested > 1000){
            this.gallonFactor = .03;
        }
        if(history > 0){
            this.historyFactor = .01;
        }

        if(this.state != "TX"){
            this.locationFactor = 0.04;
        }
        
        this.suggestedPrice = 1.5 + (1.50 * (.01  + this.gallonFactor - this.historyFactor + this.locationFactor))
        return this.suggestedPrice;
    }
}

describe('Fuel Quote Module', () => {
    describe('FuelQuoteModule Class', () => {
      it('1. Should Create a New Instance of FuelQuoteModule', () => {
        const quote = new FuelQuoteModule("testuser", 100, "Test Street", '2023-10-14', "TX");
        expect(quote).to.be.an.instanceOf(FuelQuoteModule);
      });
  
      it('2. Should Return A Suggested Price', () => {
        const quote = new FuelQuoteModule("testuser", 100, "Test Street", '2023-10-14', "TX");
        const suggestedPrice = quote.createQuote(0);
        expect(suggestedPrice).to.equal(1.575);
      });

      it('3. If statement: In-State (TX)', () => {
        const quote = new FuelQuoteModule("testuser", 100, "Test Street", '2023-10-14', "TX");
        const suggestedPrice = quote.createQuote(0);
        expect(quote.locationFactor).to.equal(0.02);
      });

      it('4. If statement: Out-of-State', () => {
        const quote = new FuelQuoteModule("testuser", 100, "Test Street", '2023-10-14', "CA");
        const suggestedPrice = quote.createQuote(0);
        expect(quote.locationFactor).to.equal(0.04);
      });

      
      it('5. If statement: Over 1000 Gallons', () => {
        const quote = new FuelQuoteModule("testuser", 1100, "Test Street", '2023-10-14', "CA");
        const suggestedPrice = quote.createQuote(0);
        expect(quote.gallonFactor).to.equal(0.03);
      });
    });
});