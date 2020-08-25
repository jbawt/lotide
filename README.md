# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.assertArraysEqual()`: basic assertion function for arrays 
* `_.assertEqual()`: basic assertion function for primitive data types
* `_.assertObjectEquals()`: basic assertion function for objects
* `_.countLetters()`: method for counting occurences of characters in strings
* `_.countOnly()`: method for count items in objects based on given criteria
* `_.eqArrays()`: method that returns true or false based on whether arrays are equal
* `_.eqObjects()`: method that returns true or false base on whether objects are equal
* `_.findKey()`: method with a callback function for finding a key in an object
* `_.findKeyByValue()`: method for finding a key by its value pair
* `_.flatten()`: a method to flatten out nested arrays into a single top level array
* `_.head()`: returns the first item in an array
* `_.letterPositions()`: returns an object that displays each index a number is at in an array
* `_.map()`: similar to the built in map method in js
* `_.middle()`: returns the middle item/items of an array depending whether the length is odd or even
* `_.tail()`: returns all the elements in an array trailing the item at index 0
* `_.takeUntil()`: returns items in an array until a condition is met
* `_.without()`: takes in two arrays, one is the source array and the other is items to be removed from the source array 