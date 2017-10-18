const chai = require('chai');
const assert = chai.assert;


const mergeSort = require('../scripts/mergeSort.js');


describe('Merge Sort', function () {


	it('should be a function', () => {
	assert.isFunction(mergeSort)
	});

	it('should sort a small array of numbers with bubbleSort', () => {
    	const numbers = [4, 3, 2, 1];
		assert.deepEqual(mergeSort(numbers), [1, 2, 3, 4] );
  	});

  	it('should be able to sort letters alphabetically', () => {
  		const letters = ['c', 'e', 'a', 'd', 'l', 'm'];
  		assert.deepEqual(mergeSort(letters), ['a', 'c', 'd', 'e', 'l', 'm'] );
  	})  	

});