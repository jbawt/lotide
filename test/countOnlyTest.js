const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("shoud return {Josh: 2, Korey: 1} when passed ['Josh', 'Josh', 'Korey', 'jason'] and {Josh: true, Korey: true}", () => {
    const input1 = ['Josh', 'Josh', 'Korey', 'jason'];
    const input2 = {Josh: true, Korey: true};
    const expected = {Josh: 2, Korey: 1};
    assert.deepEqual(countOnly(input1, input2), expected);
  });
});