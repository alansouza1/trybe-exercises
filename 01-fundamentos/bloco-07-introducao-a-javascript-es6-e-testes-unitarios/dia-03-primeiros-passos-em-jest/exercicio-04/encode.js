const encode = (string) => {
  const codes = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let result = '';
  for (let index = 0; index < string.length; index += 1) {
    const code = codes[string[index]];
    const letter = string[index];
    if (code !== undefined) {
      result += code;
    } else {
      result += letter;
    }
  }
  return result;
};

module.exports = encode;