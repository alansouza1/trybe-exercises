let numero = 967;
let ePrimo = true;

for (let index = 2; index < numero; index += 1) {
  if (numero % index === 0) {
    ePrimo = false;
  }
}

if (ePrimo) {
  console.log(numero + ' é um número primo.');
} else {
  console.log(numero + ' não é um número primo.');
}