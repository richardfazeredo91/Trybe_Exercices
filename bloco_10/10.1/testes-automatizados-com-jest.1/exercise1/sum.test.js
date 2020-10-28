const sum = require('./sum.js');

describe('add two numbers', () => {
  it('should add two values', () => {
   expect(sum(4, 5)).toBe(9);
  });
  it('should add two values', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('should add if the two values are integers', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  it('should add only if the two values are integers', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
})