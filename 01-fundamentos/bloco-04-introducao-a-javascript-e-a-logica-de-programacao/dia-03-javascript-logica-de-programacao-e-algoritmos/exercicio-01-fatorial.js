let numeroFatorial = 10;
let resultado = numeroFatorial;

for (let index = 1; index < numeroFatorial; index += 1) {
  resultado = resultado * (numeroFatorial - index);
}

console.log(resultado);