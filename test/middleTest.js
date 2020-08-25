const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return [] when passed [1]", () => {
    const actual = [1];
    const expected = [];
    assert.deepEqual(middle(actual), expected);
  });
  it("should return [2, 3] when passed [1, 2, 3, 4]", () => {
    const actual = [1, 2, 3, 4];
    const expected = [2, 3];
    assert.deepEqual(middle(actual), expected);
  });
});