const salarioBruto = 3000;
let aliquotaINSS;
let aliquotaIR;
let imposto;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
}

let salarioBase = salarioBruto - aliquotaINSS;

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
  imposto = 0;
} else if(salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  aliquotaIR = salarioBase * 0.075;
  imposto = 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  aliquotaIR = salarioBase * 0.15;
  imposto = 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  aliquotaIR = salarioBase * 0.225;
  imposto = 636.13;
} else {
  aliquotaIR = salarioBase * 0.275;
  imposto = 869.36;
}

let valorIR = aliquotaIR - imposto;

let salarioLiquido = salarioBase - valorIR;

console.log(salarioLiquido);