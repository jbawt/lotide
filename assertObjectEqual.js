const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] !== arr1[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (object1, object2) => {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  } 
  for (const key of keys1) {
    if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectEqual = (actual, expected) => {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    return `✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

const ob1 = { a: '1', b: 2, c: '3'}
const ob2 = { a: '1', b: 2, c: '3'}
const ob3 = { a: 1, b: 2, c: 4};


console.log(assertObjectEqual(ob1, ob2)); // => true
console.log(assertObjectEqual(ob1, ob3)); // => false
console.log(assertObjectEqual(ob2, ob3)); // => false

