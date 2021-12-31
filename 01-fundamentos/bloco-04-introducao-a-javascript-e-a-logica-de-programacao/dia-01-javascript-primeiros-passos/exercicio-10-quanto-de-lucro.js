const valorCusto = 300;
const valorVenda = 400;
const impostoSobreCusto = valorCusto * 0.2;
let valorCustoTotal = valorCusto + impostoSobreCusto;
let lucro = valorVenda - valorCustoTotal;
let lucroVezesMil = lucro * 1000;

if (valorCusto < 0 || valorVenda < 0 || impostoSobreCusto < 0) {
  console.log("ERRO! Valor(es) negativos.")
} else {
  console.log(lucroVezesMil);
}