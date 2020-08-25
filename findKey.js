const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`Assertion Passed👍: ${actual} === ${expected}`) : console.log(`Assertion Failed👎: ${actual} !== ${expected}`);
};

const findKey = (obj, callBack) => {
  let result;

  for (let key in obj) {
    if (callBack(obj[key])) {
      result = key;
      break;
    }
  }
  return result;
};

module.exports = findKey;

//let test1 = findKey({
//  "Blue Hill": { stars: 1 },
//  "Akaleri":   { stars: 3 },
//  "noma":      { stars: 2 },
//  "elBulli":   { stars: 3 },
//  "Ora":       { stars: 2 },
//  "Akelarre":  { stars: 3 }
//}, x => x.stars === 2); // => "noma"
//assertEqual(test1, 'noma'); // => pass
//assertEqual(test1, 'Ora'); // => fail
//
//let test2 = findKey({
//  hello: { num: 1 },
//  how: { num: 2 },
//  are: { num: 3 },
//  you: { num: 3 }
//}, b => b.num === 3); // => are
//assertEqual(test2, 'are'); // => pass
//assertEqual(test2, 'you'); // => fail