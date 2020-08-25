const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("should return a version of the source array with items removed as specified by the itemsToRemove array",()=> {
    const sourceArr = [1, 2, 4, 5, 3];
    const itemsToRemoveArr = [1, 4];
    const expected = [2, 5, 3];
    assert.deepEqual(without(sourceArr, itemsToRemoveArr), expected);
  });
  it("should return a version of the source array with items removed as specified by the itemsToRemove array",()=> {
    const sourceArr = ['I', 'am', 'hating', 'learning', 'to', 'code'];
    const itemsToRemoveArr = ['hating'];
    const expected = ['I', 'am', 'learning', 'to', 'code'];
    assert.deepEqual(without(sourceArr, itemsToRemoveArr), expected);
  });
});