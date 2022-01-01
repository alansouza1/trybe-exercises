function indiceDoMaior(array) {
  let indiceDomaiorValor = 0;
  for (let indice in array) {
    if (array[indice] > array[indiceDomaiorValor]) {
      indiceDomaiorValor = indice;
    }
  }
  return indiceDomaiorValor;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));