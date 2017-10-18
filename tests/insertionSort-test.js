const chai = require('chai');
const assert = chai.assert;
// var assert = require('chai').assert;
// import { assert } from 'chai';

const insertionSort = require('../scripts/insertionSort.js');

describe('Insertion Sort', function () {

	it('insertionSort should be a function', () => {
		assert.isFunction(insertionSort)
	});

	it('should sort a small array of numbers', () => {
    	const numbers = [4, 3, 2, 1];
		assert.deepEqual(insertionSort(numbers), [1, 2, 3, 4] );
  	});

  	it('should be able to sort letters alphabetically', () => {
  		const letters = ['c', 'e', 'a', 'd', 'l', 'm'];
  		assert.deepEqual(insertionSort(letters), ['a', 'c', 'd', 'e', 'l', 'm'] );
  	});

  	it('should sort a small array of numbers that includes negative numbers', () => {
    	const numbers = [4, 3, -2, 2, 1, -5];
		assert.deepEqual(insertionSort(numbers), [-5, -2, 1, 2, 3, 4] );
  	});

})
