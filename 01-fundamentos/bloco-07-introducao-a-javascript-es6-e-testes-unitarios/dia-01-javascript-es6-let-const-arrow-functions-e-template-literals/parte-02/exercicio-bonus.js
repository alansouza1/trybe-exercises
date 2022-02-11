// const fatorial = number => {
//   let result = 1;
//   for (let index = number; index > 1; index -= 1) {
//     result = result * index;
//   }
//   return result;
// }

const fatorial = number => number === 0 ? 1 : number * fatorial(number - 1);

console.log(fatorial(4));