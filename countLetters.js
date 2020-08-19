const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`Assertion Passed👍: ${actual} === ${expected}`) : console.log(`Assertion Failed👎: ${actual} !== ${expected}`);
};

const countLetters = (str) => {
  let newStr = str.split(' ').join('');
  let output = {};

  for (const letter of newStr) {
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }

  return output;
};

//console.log(countLetters("lighthouse in the house"));
let test = countLetters('hello I am josh');
assertEqual(test['e'], 1);
assertEqual(test['o'], 2);
assertEqual(test['l'], 2);
