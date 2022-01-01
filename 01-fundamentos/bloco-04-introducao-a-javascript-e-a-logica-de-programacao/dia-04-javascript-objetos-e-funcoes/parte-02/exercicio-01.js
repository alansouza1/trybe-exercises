function verificaPalindromo(string) {
  let letras = string.split('').reverse().join('');
  if (string === letras) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindromo('arara'));