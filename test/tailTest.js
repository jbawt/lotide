const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("should return [2, 3, 4] when pass [1, 2, 3, 4]", () => {
    const actual = [1, 2, 3, 4];
    const expected = [2, 3, 4];
    assert.deepEqual(tail(actual), expected);
  });
});