const middle = (arr) => {
  let middle = [];
  let middleIndex = Math.ceil(arr.length / 2);
  
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 0) {
    middle.push(arr[middleIndex - 1]);
    middle.push(arr[middleIndex]);
  } else {
    middle.push(arr[middleIndex - 1]);
  }
  return middle;
};

module.exports = middle;
