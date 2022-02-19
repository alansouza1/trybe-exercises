const techList = (technologies, name) => {
  if (technologies.length === 0) return 'Vazio!';
  let list = [];
  let ordenedList = technologies.sort();
  for (let tech of ordenedList) {
    let obj = { tech, name };
    list.push(obj);
  }
  return list;
};

module.exports = techList;