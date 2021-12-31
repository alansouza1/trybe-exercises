const angulo1 = 90;
const angulo2 = 30;
const angulo3 = 60;

let somaDosAngulos = angulo1 + angulo2 + angulo3;

if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
  console.log("ERRO! Ângulos inválidos");
} else if (somaDosAngulos === 180) {
  console.log(true);
} else {
  console.log(false);
}