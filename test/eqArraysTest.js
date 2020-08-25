const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("should return true when arr1 === arr2", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    assert.strictEqual(eqArrays(arr1, arr2), true);
  });
  it("should return false when arr1 !== arr2", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 3, 2];
    assert.strictEqual(eqArrays(arr1, arr2), false);
  });
});