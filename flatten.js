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

const flatten = (arr) => {
  let outputArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        outputArr.push(arr[i][j]);
      }
    } else {
      outputArr.push(arr[i]);
    }
  }
  return outputArr;
};
// === PASSED ===
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
console.log('correct!', flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log('--------------------------------');

assertArraysEqual(flatten([1, 2, 'hello', [4, 5, 'how'], 'are', 54, [3, 45], 'yes']), [1, 2, 'hello', 4, 5, 'how', 'are', 54, 3, 45, 'yes']);
console.log('correct!', flatten([1, 2, 'hello', [4, 5, 'how'], 'are', 54, [3, 45], 'yes'])); // => [1, 2, 'hello', 4, 5, 'how', 'are', 54, 3, 45, 'yes']
console.log('--------------------------------');

// === FAILED ===

assertArraysEqual(flatten([1, 2, 4, [5, 6, 3], 4]), [1, 2, 4, 5, 6, 3]); // should be => [1, 2, 4, 5, 6, 3, 4]
console.log('the real answer is: ', flatten([1, 2, 4, [5, 6, 3], 4]));
console.log('--------------------------------');

assertArraysEqual(flatten([1, 3, 4, ['hello', 'sure'], 5]), [1, 3, 4, 'hello', 'sure']); // should be => [1, 3, 4, 'hello', 'sure', 5];
console.log('the real answer is: ', flatten([1, 3, 4, ['hello', 'sure'], 5]));
console.log('--------------------------------');

