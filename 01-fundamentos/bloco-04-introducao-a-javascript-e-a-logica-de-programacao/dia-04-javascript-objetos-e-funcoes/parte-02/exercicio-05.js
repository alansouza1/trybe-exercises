function numeroQueMaisSeRepete(array) {
  let repeticoes;
  let indexDoMaisRepetidos = 0;
  let numeroMaisRepetido = 0;

  for (let index = 0; index < array.length; index += 1) {
    repeticoes = 0;
    for (let numero of array) {
      if (array[index] === numero) {
        repeticoes += 1;
      }
    }

    if (repeticoes > indexDoMaisRepetidos) {
      indexDoMaisRepetidos = repeticoes;
      numeroMaisRepetido = array[index];
    }
  }

  return numeroMaisRepetido;
}

console.log(numeroQueMaisSeRepete([2, 3, 2, 5, 8, 2, 3]));