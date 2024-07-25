const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe('SUM type', function(){
	describe('calculateNumber', function(){
		it('1.2 + 3.4 = 4', function(){
			expect(calculateNumber('SUM', 1.2, 3.4)).to.equal(4);
		});
	});

	describe('calculateNumber', function(){
		it('1.2 + 3.5 = 5', function(){
			expect(calculateNumber('SUM', 1.2, 3.5)).to.equal(5);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.5 + 3.5 = 6', function(){
			expect(calculateNumber('SUM', 1.5, 3.5)).to.equal(6);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.6 + 3.8 = 6', function(){
			expect(calculateNumber('SUM', 1.6, 3.8)).to.equal(6);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1.6 + 3.8 = 2', function(){
			expect(calculateNumber('SUM', -1.6, 3.8)).to.equal(2);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.6 + -3.8 = -2', function(){
			expect(calculateNumber('SUM', 1.6, -3.8)).to.equal(-2);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1.6 + -3.8 = -6', function(){
			expect(calculateNumber('SUM', -1.6, -3.8)).to.equal(-6);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1 + -3 = -4', function(){
			expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
		});
	});
	
	describe('calculateNumber', function(){
		it('1 + 3 = 4', function(){
			expect(calculateNumber('SUM', 1, 3)).to.equal(4);
		});
	});
	
	describe('calculateNumber', function(){
		it('1 + -3 = -2', function(){
			expect(calculateNumber('SUM', 1, -3)).to.equal(-2);
		});
	});
});


describe('SUBTRACT type', function(){
	describe('calculateNumber', function(){
		it('1.2 - 3.4 = -2', function(){
			expect(calculateNumber('SUBTRACT', 1.2, 3.4)).to.equal(-2);
		});
	});

	describe('calculateNumber', function(){
		it('1.2 - 3.5 = -3', function(){
			expect(calculateNumber('SUBTRACT', 1.2, 3.5)).to.equal(-3);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.5 - 3.5 = -2', function(){
			expect(calculateNumber('SUBTRACT', 1.5, 3.5)).to.equal(-2);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.6 - 3.8 = -2', function(){
			expect(calculateNumber('SUBTRACT', 1.6, 3.8)).to.equal(-2);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1.6 - 3.8 = -6', function(){
			expect(calculateNumber('SUBTRACT', -1.6, 3.8)).to.equal(-6);
		});
	});
	
	describe('calculateNumber', function(){
		it('1.6 - -3.8 = 6', function(){
			expect(calculateNumber('SUBTRACT', 1.6, -3.8)).to.equal(6);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1.6 - -3.8 = 2', function(){
			expect(calculateNumber('SUBTRACT', -1.6, -3.8)).to.equal(2);
		});
	});
	
	describe('calculateNumber', function(){
		it('-1 - -3 = 2', function(){
			expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
		});
	});
	
	describe('calculateNumber', function(){
		it('1 - 3 = -2', function(){
			expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
		});
	});
	
	describe('calculateNumber', function(){
		it('1 - -3 = 4', function(){
			expect(calculateNumber('SUBTRACT', 1, -3)).to.equal(4);
		});
	});
});

describe('DIVIDE type', function(){
	describe('calculateNumber', function(){
		it('1.2 / 4.4 = 0.25', function(){
			expect(calculateNumber('DIVIDE', 1.2, 4.4)).to.equal(0.25);
		});
		
		it('-1.2 / 4.4 = -0.25', function(){
			expect(calculateNumber('DIVIDE', -1.2, 4.4)).to.equal(-0.25);
		});
		
		it('-1.2 / 0.5 = -1', function(){
			expect(calculateNumber('DIVIDE', -1.2, 0.5)).to.equal(-1);
		});
		
		it('-1.2 / -0.5 = Error', function(){
			expect(calculateNumber('DIVIDE', -1.2, -0.5)).to.equal('Error');
		});
		
		it('-1.2 / 0.4 = Error', function(){
			expect(calculateNumber('DIVIDE', -1.2, 0.4)).to.equal('Error');
		});
	});
});
