const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3]; // => true
const arr3 = [1, 2, 3];
const arr4 = [3, 2, 1]; // => false

const arr5 = ["1", "2", "3"];
const arr6 = ["1", "2", "3"];// => true
const arr7 = ["1", "2", "3"];
const arr8 = ["1", "2", 3];



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
    console.log(`assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`assertion failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual(arr1, arr2);
assertArraysEqual(arr3, arr4);
assertArraysEqual(arr5, arr6);
assertArraysEqual(arr7, arr8);




