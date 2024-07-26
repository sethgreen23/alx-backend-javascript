const request = require('request');
const { expect } = require('chai');
const sinon = require('sinon');

describe('index page integration test', function(){
	const baseUrl = 'http://localhost:7865';
	it('Payment methods for cart 12', function(done) {
		request.get(`${baseUrl}/cart/12`, function(err, res, body) {
			expect(err).to.be.null;
			expect(res.statusCode).to.equal(200);
			expect(body).to.equal('Payment methods for cart 12');
			done();
		})
	})
	
	it('should return Welcome to the payment system', function(done) {
		request.get(`${baseUrl}/`, function(err, res, body) {
			expect(err).to.be.null;
			expect(res.statusCode).to.equal(200);
			expect(body).to.equal('Welcome to the payment system');
			done();
		})
	})
	
	it('should return Welcome data', function(done) {
		request.get(`${baseUrl}/available_payments`, function(err, res, body) {
			data = {
				payment_methods: {
				  credit_cards: true,
				  paypal: false
				}
			  };
			expect(err).to.be.null;
			expect(res.statusCode).to.equal(200);
			expect(JSON.parse(body)).to.deep.equal(data);
			done();
		})
	})
	
	it('should return Welcome username', function(done) {
		const options = {
			url: `${baseUrl}/login`,
			json: true,
			body: {userName: 'Betty'}
		}
		
		request.post(options, function(err, res, body) {
			expect(err).to.be.null;
			expect(res.statusCode).to.equal(200);
			expect(body).to.equal('Welcome Betty');
			done();
		})
	})
	
	it('should return 404', function(done) {
		request.get(`${baseUrl}/cart/hello`, function(err, res, body) {
			expect(err).to.be.null;
			expect(res.statusCode).to.equal(404);
			done();
		})
	})
})
