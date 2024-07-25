function calculateNumber(type, a, b){
	if (type === 'SUM')
		return add(a, b);
	if (type === 'SUBTRACT')
		return sub(a, b);
	if (type === 'DIVIDE')
		return div(a, b);
	return 'Error';
}

function add(a, b){
	return Math.round(a) + Math.round(b);
}

function sub(a, b){
	return Math.round(a) - Math.round(b);
}

function  div(a, b){
	if (Math.round(b) === 0)
		return 'Error';
	return Math.round(a) / Math.round(b);
}


module.exports =  calculateNumber;
