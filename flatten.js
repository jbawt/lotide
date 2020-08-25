const flatten = (arr) => {
  let outputArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        outputArr.push(arr[i][j]);
      }
    } else {
      outputArr.push(arr[i]);
    }
  }
  return outputArr;
};

module.exports = flatten;


