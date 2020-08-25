const eqArrays = (arr1, arr2) => {

  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] !== arr1[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    return `assertion passed: ${arr1} === ${arr2}`;
  } else {
    return `assertion failed: ${arr1} !== ${arr2}`;
  }
};




const takeUntil = (arr, callBack) => {
  const result = [];

  for (let item of arr) {
    if (!item === callBack(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeUntil;

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ])); // ==> pass
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 9 ])); // ==> fail

console.log('-----------------------------------');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])); // ==> pass
console.log(assertArraysEqual(results2, ['been', 'to', 'Hollywood' ])); // ==> fail
*/