const takeUntil = (arr, callBack) => {
  const result = [];

  for (let item of arr) {
    if (!item === callBack(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
};

module.exports = takeUntil;