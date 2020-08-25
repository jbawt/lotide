const map = (arr, callBack) => {
  const results = [];
  
  for (let item of arr) {
    results.push(callBack(item));
  }
  return results;
};

module.exports = map;