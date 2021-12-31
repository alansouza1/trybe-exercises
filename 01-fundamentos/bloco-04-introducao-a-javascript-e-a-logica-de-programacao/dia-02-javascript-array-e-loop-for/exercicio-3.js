let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numberOfElements = numbers.length;
let sumOfAll = null;

for (let number of numbers) {
  sumOfAll += number;
}

let average = sumOfAll / numberOfElements;

console.log(average);