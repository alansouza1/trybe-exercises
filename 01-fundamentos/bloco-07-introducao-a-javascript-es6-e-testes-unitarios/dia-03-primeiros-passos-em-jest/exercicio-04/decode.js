const decode = (string) => {
  const codes = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
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

module.exports = decode;