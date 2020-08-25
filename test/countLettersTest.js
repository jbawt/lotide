const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("should return {j: 1, o: 1, s: 1, h: 1} when given 'josh'", () => {
    const actual = 'josh';
    const expected = {j: 1, o: 1, s: 1, h: 1};
    assert.deepEqual(countLetters(actual), expected);
  });
});