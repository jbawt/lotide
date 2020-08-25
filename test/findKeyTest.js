const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it("should return key name based on callback function", () => {
    const inputObj = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };
    const callBack = (x) => x.stars === 2;
    const expected = 'noma';
    assert.strictEqual(findKey(inputObj, callBack), expected);
  });
});