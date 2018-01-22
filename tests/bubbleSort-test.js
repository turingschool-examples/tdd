const assert = require('chai').assert
const bubbleSort = require('../lib/bubbleSort')

describe("Bubble Sort", function () {
  it("can sort a short array of numbers", function () {
    assert.deepEqual(bubbleSort([10, 4, 7, 3]), [3, 4, 7, 10]);
  })
})