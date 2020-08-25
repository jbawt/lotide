const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  it("should return mutated array base on callback function", () => {
    const testArr = [1, 2, 3, 4, 5, 6];
    const callback = num => num * 2;
    const expected = [2, 4, 6, 8, 10, 12];
    assert.deepEqual(map(testArr, callback), expected);
  });
});