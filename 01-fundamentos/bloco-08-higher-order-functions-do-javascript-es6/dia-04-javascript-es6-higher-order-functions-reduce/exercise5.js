const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => {
    curr = curr.toLowerCase().split('');
    curr = curr.reduce((acc, curr) => curr === 'a' ? acc += 1 : acc, 0);
    return acc + curr;
  }, 0);
}

console.log(containsA());