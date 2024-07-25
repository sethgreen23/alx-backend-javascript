const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
	const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
	const formatTotal = `The total is: ${total}`;
	console.log(formatTotal);
}

module.exports = sendPaymentRequestToApi;
