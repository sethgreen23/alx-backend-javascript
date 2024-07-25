const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function(){
	it('has the same math', function(){
		const spy = sinon.spy(Utils, 'calculateNumber');
		const spy1 = sinon.spy(console, 'log');
		sendPaymentRequestToApi(100, 20);
		sinon.assert.calledOnceWithExactly(spy, 'SUM', 100, 20);
		// expect(spy1.calledWith('The total is: 120')).to.be.true;
		sinon.assert.calledWith(spy1, 'The total is: 120');
		spy.restore();
		spy1.restore();
	})
});
