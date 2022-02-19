const hydrate = (string) => {
  const reg = /\d+/g;
  const results = string.match(reg);
  let total = 0;
  for (let result of results) {
    total += parseInt(result, 10);
  }
  if (total === 1) {
    return '1 copo de água';
  }
  return `${total} copos de água`;
};

module.exports = hydrate;