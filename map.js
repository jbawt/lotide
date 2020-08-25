
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



const map = (arr, callBack) => {
  const results = [];
  
  for (let item of arr) {
    results.push(callBack(item));
  }
  return results;
};

module.exports = map;

/*
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6]

const results1 = map(words, word => word[0]); // ==> ['g', 'c', 't', 'm', 't']
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])) // ==> passed
console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 2 ])) // ==> failed
console.log('------------------------------------------------');

const results2 = map(words, word => word + 'w'); // ==> ["groundw", "controlw", "tow", "majorw", "tomw"]
console.log(assertArraysEqual(results2, [ 'g', 'c', 't', 'm', 't' ])) // ==> failed
console.log(assertArraysEqual(results2, ["groundw", "controlw", "tow", "majorw", "tomw"])) // ==> passed
console.log('------------------------------------------------');

const results3 = map(numbers, nums => nums * 2); // ==> [2, 4, 6, 8, 10, 12]
console.log(assertArraysEqual(results3, [ 'g', 'c', 't', 'm', 't' ])) // ==> failed
console.log(assertArraysEqual(results3, [2, 4, 6, 8, 10, 12])) // ==> passed
*/