const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function(){
	
	it('should resolve with data object', function(done){
		getPaymentTokenFromAPI(true)
		.then((data) => {
			expect(data.data).to.equal('Successful response from the API');
			done();
		})
		.catch(done);
	})
});


