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

const without = (source, itemsToRemove) => {
  const newArr = source.slice();
  
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArr[i] === itemsToRemove[j]) {
        newArr.splice(i, 1);
      }
    }
  }
  return newArr;
}
console.log(without([1, 2, 3, 1], [1]));

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["hello", "how", "are", "you", "you", "hello"], ["hello", "you"]), ["how", "are"]); // => ["how", "are"]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]
assertArraysEqual(without([2, 4, 5, 9, 8, 10], [2, 5, 8]), [4, 9]) // => [4, 9, 10]


let firstArr = [1, 2, 4, 5, 3];
let secondArr = [1, 4];
let expectedArr = [2, 5, 3];
console.log(without(firstArr, secondArr));
assertArraysEqual(without(firstArr, secondArr), expectedArr);

//test to make sure original array is not altered
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

