const without = (source, itemsToRemove) => {
  const newArr = source.slice();
  
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (newArr[i] === itemsToRemove[j]) {
        newArr.splice(i, 1);
      }
    }
  }
  return newArr;
};

module.exports = without;