const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("should return true if obj1 === obj2", () => {
    const input1 = {a: 1, b: 2};
    const input2 = {a: 1, b: 2};
    assert.deepEqual(eqObjects(input1, input2), true);
  });
  it("should return false if obj1 !== obj2", () => {
    const input1 = {a: 1, b: 2};
    const input2 = {a: 1, b: 3};
    assert.deepEqual(eqObjects(input1, input2), false);
  });
});