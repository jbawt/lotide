const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("should return key based on value param entry", () => {
    const testObj = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const value = 'The Expanse';
    const expected = 'sci_fi';
    assert.strictEqual(findKeyByValue(testObj, value), expected);    
  });
});