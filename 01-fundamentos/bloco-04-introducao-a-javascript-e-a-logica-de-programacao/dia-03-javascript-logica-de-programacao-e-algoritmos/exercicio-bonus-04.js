let n = 5;
let espacos = (n - 1) / 2;

for (let linha = 1; linha <= n; linha += 2) {
  let triangulo = '';
  
  for (let index = espacos; index > 0; index -= 1) {
    triangulo += ' ';
  }

  for (let index = 0; index < linha; index += 1) {
    triangulo += '*';
  }

  for (let index = espacos; index > 0; index -= 1) {
    triangulo += ' ';
  }

  console.log(triangulo);
  espacos -= 1;
}