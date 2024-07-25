const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function(){
	it('has the same math', function(){
		const UtilsStub = sinon.stub(Utils, 'calculateNumber');
		UtilsStub.returns(10);
		const ConsoleSpy = sinon.spy(console, 'log');
		sendPaymentRequestToApi(100, 20);
		sinon.assert.calledOnceWithExactly(UtilsStub, 'SUM', 100, 20);
		sinon.assert.calledWith(ConsoleSpy, 'The total is: 10');
		UtilsStub.restore();
		ConsoleSpy.restore();
	})
});
