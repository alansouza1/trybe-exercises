let n = 5;

if (n > 1) {
  for (let linha = n - 1; linha >= 0; linha -= 1) {
    let triangulo = '';
    for (let coluna = 0; coluna < n; coluna += 1) {
      if (linha > coluna) {
        triangulo += ' ';
      } else {
        triangulo += '*';
      }
    }
    console.log(triangulo);
  }
}