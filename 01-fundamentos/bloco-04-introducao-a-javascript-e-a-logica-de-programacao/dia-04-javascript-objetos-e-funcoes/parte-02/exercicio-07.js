function finalIgual(palavra, final) {
  let palavraSeparada = palavra.split('');
  let finalSeparado = final.split('');
  let resultado = true;

  for (let index = 1; index <= finalSeparado.length; index += 1) {
    if (palavraSeparada[palavraSeparada.length - index] !== finalSeparado[finalSeparado.length - index]) {
      resultado = false;
    }
  }

  return resultado;
}

console.log(finalIgual('trybe', 'be'));