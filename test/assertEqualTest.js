const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertArraysEqual", () => {
  it("should return true if input1 === input2", () => {
    const input1 = 1;
    const input2 = 1;
    const expected = `Assertion Passed👍: ${input1} === ${input2}`
    assert.strictEqual(assertEqual(input1, input2), expected);
  });
  it("should return false if input1 !== input2", () => {
    const input1 = 1;
    const input2 = 2;
    const expected = `Assertion Failed👎: ${input1} !== ${input2}`;
    assert.strictEqual(assertEqual(input1, input2), expected);
  });
});