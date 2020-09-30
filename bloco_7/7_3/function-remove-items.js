const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], `Erro! O array retornado não é igual."`);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], `Erro! O array retornado não é igual."`);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 1), [1, 2, 3, 4], `Erro! O array sofreu alterações."`);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], `Erro! O array esperado é [1, 3, 4]."`);