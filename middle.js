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

const middle = (arr) => {
  let middle = [];
  let middleIndex = Math.ceil(arr.length / 2);
  
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 0) {
    middle.push(arr[middleIndex - 1]);
    middle.push(arr[middleIndex]);
  } else {
    middle.push(arr[middleIndex - 1]);
  }
  return middle;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
