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

