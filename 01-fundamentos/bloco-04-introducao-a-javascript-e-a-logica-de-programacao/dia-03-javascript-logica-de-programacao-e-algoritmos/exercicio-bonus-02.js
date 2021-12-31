let n = 5;

if (n > 1) {
  for (let linha = 1; linha <= n; linha += 1) {
    let triangulo = '';
    for (let coluna = 0; coluna < linha; coluna += 1) {
      triangulo += '*';
    }
    console.log(triangulo);
  }
}