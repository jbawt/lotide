const letterPositions = (sentence) => {
  const results = {};
  let index = 0;

  for (const letter of sentence) {
    if (letter !== ' ') {
      if (!results[letter]) {
        results[letter] = [index];
      } else {
        results[letter].push(index);
      }
      index++;
    }
  }

  return results;
};

module.exports = letterPositions;