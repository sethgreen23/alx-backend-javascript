const request = require('request');
const { expect } = require('chai');
const sinon = require('sinon');

describe('index page integration test', function(){
	const baseUrl = 'http://localhost:7865';
	it('should return Welcome to the payment system', function(done) {
		request.get(`${baseUrl}/`, function(err, res, body) {
			expect(err).to.be.null;
			expect(res.statusCode).to.equal(200);
			expect(body).to.equal('Welcome to the payment system');
			done();
		})
	})
})
