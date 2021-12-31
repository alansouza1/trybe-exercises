let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberOfElements = numbers.length;
let sumOfAll = null;

for (let number of numbers) {
  sumOfAll += number;
}

let average = sumOfAll / numberOfElements;

if (average > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}