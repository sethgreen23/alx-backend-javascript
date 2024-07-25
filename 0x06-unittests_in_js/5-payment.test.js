const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function(){
	let ConsoleSpy;
	beforeEach(function(){
		ConsoleSpy = sinon.spy(console, 'log');
	})

	afterEach(function(){
		ConsoleSpy.restore();
	})
	it('sendPaymentRequestToApi(100, 20) returns 120', function(){
		sendPaymentRequestToApi(100, 20);
		sinon.assert.calledOnce(ConsoleSpy);
		sinon.assert.calledWith(ConsoleSpy, 'The total is: 120');
	})
	
	it('sendPaymentRequestToApi(10, 10) returns 20', function(){
		sendPaymentRequestToApi(10, 10);
		sinon.assert.calledOnce(ConsoleSpy);
		sinon.assert.calledWith(ConsoleSpy, 'The total is: 20');
	})
});


