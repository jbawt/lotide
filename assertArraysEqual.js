const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    return `assertion passed: ${arr1} === ${arr2}`;
  } else {
    return `assertion failed: ${arr1} !== ${arr2}`;
  }
};

module.exports = assertArraysEqual;




