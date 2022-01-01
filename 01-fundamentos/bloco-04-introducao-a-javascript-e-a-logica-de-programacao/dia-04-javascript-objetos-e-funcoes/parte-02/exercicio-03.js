function indiceDoMenor(array) {
  let indiceDoMenorValor = 0;
  for (let indice in array) {
    if (array[indice] < array[indiceDoMenorValor]) {
      indiceDoMenorValor = indice;
    }
  }
  return indiceDoMenorValor;
}

console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));