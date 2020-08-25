const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("should return [1, 2, 3, 4] when passed [1, [2, 3], 4]", () => {
    const actual = [1, [2, 3], 4];
    const expected = [1, 2, 3, 4];
    assert.deepEqual(flatten(actual), expected);
  });
});