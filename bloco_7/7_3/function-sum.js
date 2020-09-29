const assert = require('assert');

const sum = (a, b) => a + b;

assert.strictEqual(sum(4, 5), 9, `Erro! O resultado esperado era 9.`);
assert.strictEqual(sum(0, 0), 0, `Erro! O resultado esperado era 0.`);
assert.strictEqual(sum(4, "5"), 0, `Erro! Operações matemáticas com strings não são possíveis.`);
assert.strictEqual(sum(4, "5"), 0, `parameters must be numbers`);
