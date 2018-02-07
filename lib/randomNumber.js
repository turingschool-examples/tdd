function createRandomArray (min, max) {
    let array = [];
    for (i = 0; i < max; i++)
    array.push(Math.floor(Math.random() * (max -min) + min));
    return array;
}

module.exports = createRandomArray;