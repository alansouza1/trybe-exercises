let maiorNumeroPrimo = 0;

for (let numeroAtual = 2; numeroAtual < 50; numeroAtual += 1) {
  let quantidadeDeDivisores = 0;
  for (let divisorAtual = 1; divisorAtual <= numeroAtual; divisorAtual += 1) {
    if (numeroAtual % divisorAtual === 0) {
      quantidadeDeDivisores += 1;
    }
  }

  if (quantidadeDeDivisores === 2 && numeroAtual > maiorNumeroPrimo) {
    maiorNumeroPrimo = numeroAtual;
  }
}

console.log(maiorNumeroPrimo);