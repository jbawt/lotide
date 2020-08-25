const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  it("should return items from an array until a callback condition is met", () => {
    const testArr = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const callback = x => x < 0;
    const expected = [1, 2, 5, 7, 2];
    assert.deepEqual(takeUntil(testArr, callback), expected);
  });
});