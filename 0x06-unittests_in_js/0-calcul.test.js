const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('0 Calcul', function(){
	describe('calculateNumber', function(){
		it('1.2 + 3.4 = 4.6', function(){
			assert.strictEqual(calculateNumber(1.2, 3.4), 4);
		});
	});

	describe('calculateNumber', function(){
		it('1.2 + 3.5 = 5', function(){
			assert.strictEqual(calculateNumber(1.2, 3.5), 5);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.5 + 3.5 = 6', function(){
			assert.strictEqual(calculateNumber(1.5, 3.5), 6);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.6 + 3.8 = 6', function(){
			assert.strictEqual(calculateNumber(1.6, 3.8), 6);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1.6 + 3.8 = 2', function(){
			assert.strictEqual(calculateNumber(-1.6, 3.8), 2);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.6 + -3.8 = -2', function(){
			assert.strictEqual(calculateNumber(1.6, -3.8), -2);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1.6 + -3.8 = -6', function(){
			assert.strictEqual(calculateNumber(-1.6, -3.8), -6);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1 + -3 = -4', function(){
			assert.strictEqual(calculateNumber(-1, -3), -4);
		});
	});
	
	describe('calculateNumber', function(){
		it('1 + 3 = 4', function(){
			assert.strictEqual(calculateNumber(1, 3), 4);
		});
	});
	
	describe('calculateNumber', function(){
		it('1 + -3 = -2', function(){
			assert.strictEqual(calculateNumber(1, -3), -2);
		});
	});
});
