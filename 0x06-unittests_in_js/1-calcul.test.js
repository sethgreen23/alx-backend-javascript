const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('SUM type', function(){
	describe('calculateNumber', function(){
		it('1.2 + 3.4 = 4.6', function(){
			assert.strictEqual(calculateNumber('SUM', 1.2, 3.4), 4);
		});
	});

	describe('calculateNumber', function(){
		it('1.2 + 3.5 = 5', function(){
			assert.strictEqual(calculateNumber('SUM', 1.2, 3.5), 5);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.5 + 3.5 = 6', function(){
			assert.strictEqual(calculateNumber('SUM', 1.5, 3.5), 6);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.6 + 3.8 = 6', function(){
			assert.strictEqual(calculateNumber('SUM', 1.6, 3.8), 6);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1.6 + 3.8 = 2', function(){
			assert.strictEqual(calculateNumber('SUM', -1.6, 3.8), 2);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.6 + -3.8 = -2', function(){
			assert.strictEqual(calculateNumber('SUM', 1.6, -3.8), -2);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1.6 + -3.8 = -6', function(){
			assert.strictEqual(calculateNumber('SUM', -1.6, -3.8), -6);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1 + -3 = -4', function(){
			assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
		});
	});
	
	describe('calculateNumber', function(){
		it('1 + 3 = 4', function(){
			assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
		});
	});
	
	describe('calculateNumber', function(){
		it('1 + -3 = -2', function(){
			assert.strictEqual(calculateNumber('SUM', 1, -3), -2);
		});
	});
});


describe('SUBTRACT type', function(){
	describe('calculateNumber', function(){
		it('1.2 - 3.4 = -2', function(){
			assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.4), -2);
		});
	});

	describe('calculateNumber', function(){
		it('1.2 - 3.5 = -3', function(){
			assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.5), -3);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.5 - 3.5 = -2', function(){
			assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.5), -2);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.6 - 3.8 = -2', function(){
			assert.strictEqual(calculateNumber('SUBTRACT', 1.6, 3.8), -2);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1.6 - 3.8 = -6', function(){
			assert.strictEqual(calculateNumber('SUBTRACT', -1.6, 3.8), -6);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.6 - -3.8 = 6', function(){
			assert.strictEqual(calculateNumber('SUBTRACT', 1.6, -3.8), 6);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1.6 - -3.8 = 2', function(){
			assert.strictEqual(calculateNumber('SUBTRACT', -1.6, -3.8), 2);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1 - -3 = 2', function(){
			assert.strictEqual(calculateNumber('SUBTRACT', -1, -3), 2);
		});
	});
	
	describe('calculateNumber', function(){
		it('1 - 3 = -2', function(){
			assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
		});
	});
	
	describe('calculateNumber', function(){
		it('1 - -3 = 4', function(){
			assert.strictEqual(calculateNumber('SUBTRACT', 1, -3), 4);
		});
	});
});

describe('DIVIDE type', function(){
	describe('calculateNumber', function(){
		it('1.2 / 4.4 = 0.25', function(){
			assert.strictEqual(calculateNumber('DIVIDE', 1.2, 4.4), 0.25);
		});
		
		it('-1.2 / 4.4 = -0.25', function(){
			assert.strictEqual(calculateNumber('DIVIDE', -1.2, 4.4), -0.25);
		});
		
		it('-1.2 / 0.5 = -1', function(){
			assert.strictEqual(calculateNumber('DIVIDE', -1.2, 0.5), -1);
		});
		
		it('-1.2 / -0.5 = Error', function(){
			assert.strictEqual(calculateNumber('DIVIDE', -1.2, -0.5), 'Error');
		});
		
		it('-1.2 / 0.4 = Error', function(){
			assert.strictEqual(calculateNumber('DIVIDE', -1.2, 0.4), 'Error');
		});
	});
});
