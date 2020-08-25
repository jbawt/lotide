const countLetters = (str) => {
  let newStr = str.split(' ').join('');
  let output = {};

  for (const letter of newStr) {
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }

  return output;
};

module.exports = countLetters;
