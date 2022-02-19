const checarNumero = (numeroApostado, numeroSorteado) => numeroApostado === numeroSorteado ? 'Parabéns você ganhou' : 'Tente novamente';

const sortear = (numeroApostado, callback) => {
  const numeroSorteado = parseInt((Math.random() * 5) + 1, 10);
  const resultado = callback(numeroApostado, numeroSorteado);
  return resultado;
};

console.log(sortear(4, checarNumero));