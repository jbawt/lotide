const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("should return 1 when passed [1, 2, 3]", () => {
    const actual = [1, 2, 3];
    assert.strictEqual(head(actual), 1);
  });
});