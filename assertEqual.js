const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`Assertion Passed👍: ${actual} === ${expected}`) : console.log(`Assertion Failed👎: ${actual} !== ${expected}`);
};


module.exports = assertEqual;