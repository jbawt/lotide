const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return {h: 0, e: 1, y: 2} when pass hey", () => {
    const input = 'hey';
    const expected = {h: [0], e: [1], y: [2]};
    assert.deepEqual(letterPositions(input), expected);
  });
  it("should return {h: [0], e: [1], l: [2, 3], o: [4]} when pass hey", () => {
    const input = 'hello';
    const expected = {h: [0], e: [1], l: [2, 3], o: [4]};
    assert.deepEqual(letterPositions(input), expected);
  });
});