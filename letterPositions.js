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



const letterPositions = (sentence) => {
  const results = {};
  let index = 0;

  for (const letter of sentence) {
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [index];
      } else {
        results[letter].push(index)
      }
      index++;
    }
  }

  return results;
}

//console.log(letterPositions('hello how are you'));