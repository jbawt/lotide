const assertEqual = (actual, expected) => {
  return actual === expected ? console.log(`Assertion Passed👍: ${actual} === ${expected}`) : console.log(`Assertion Failed👎: ${actual} !== ${expected}`);
};

const tail = (arr) => arr.slice(1, arr.length);

//assert equal function tests
//assertEqual("wroooong", "Bootcamp");
//assertEqual(1, 1);

// tail function tests
const array = tail([1, 2, 3, 4, 5]);
const words = tail(["zero", "one", "two", "three"]);
assertEqual(array.length, 3);
assertEqual(array.length, 4);
assertEqual(words.length, 5);
assertEqual(words.length, 3);

//modified arr test
const word = ["one", "two", "three", "four"];
tail(word);
assertEqual(word.length, 4);