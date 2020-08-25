const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertEqualTest", () => {
  it("should return assertion passed 1, 2, 3 === 1, 2, 3", ()=> {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    const expected = `assertion passed: ${arr1} === ${arr2}`;
    assert.strictEqual(assertArraysEqual(arr1, arr2), expected);
  });
  it("should return assertion failed 1, 2, 3 !== 1, 3, 2", ()=> {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 3, 2];
    const expected = `assertion failed: ${arr1} !== ${arr2}`;
    assert.strictEqual(assertArraysEqual(arr1, arr2), expected);
  });
});
