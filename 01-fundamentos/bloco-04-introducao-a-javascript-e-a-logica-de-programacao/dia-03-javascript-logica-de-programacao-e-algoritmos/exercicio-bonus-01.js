let n = 5;

if (n > 1) {
  for (let linha = 0; linha < n; linha += 1) {
    let quadrado = '';
    for (let coluna = 0; coluna < n; coluna += 1) {
      quadrado += '*';
    }
    console.log(quadrado);
  }
}