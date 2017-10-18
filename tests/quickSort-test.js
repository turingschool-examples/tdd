const chai = require('chai');
const assert = chai.assert;
// var assert = require('chai').assert;
// import { assert } from 'chai';

const quickSort = require('../scripts/quickSort.js');


describe('Quick Sort', function () {

	it('should be a function', () => {
		assert.isFunction(quickSort)
	});

	it('should sort a small array of numbers', () => {
    	const numbers = [4, 3, 2, 1];
		assert.deepEqual(quickSort(numbers), [1, 2, 3, 4] );
  	});

  	it('should be able to sort letters alphabetically', () => {
  		const letters = ['c', 'e', 'a', 'd', 'l', 'm'];
  		assert.deepEqual(quickSort(letters), ['a', 'c', 'd', 'e', 'l', 'm'] );
  	})

  });