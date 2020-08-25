const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const eqArrays = require('./eqArrays');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const assertObjectEqual = require('./assertObjectEqual');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  letterPositions: letterPositions,
  flatten: flatten,
  eqArrays: eqArrays,
  countOnly: countOnly,
  countLetters: countLetters,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  eqObjects: eqObjects,
  assertObjectEqual: assertObjectEqual,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  map: map,
  takeUntil: takeUntil,
  without: without
};