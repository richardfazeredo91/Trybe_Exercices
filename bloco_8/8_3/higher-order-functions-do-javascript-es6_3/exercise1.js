const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  return arrays.reduce((acumulator, currentValue) => {
    currentValue.map(element => acumulator.push(element));
    return acumulator;
  }, []);
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
