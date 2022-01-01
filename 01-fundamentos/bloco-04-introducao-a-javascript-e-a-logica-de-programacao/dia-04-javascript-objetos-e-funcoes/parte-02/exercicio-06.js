function somaDosNumeros(num) {
  let total = 0;
  for (let index = 1; index <= num; index += 1) {
    total += index;
  }
  return total;
}

console.log(somaDosNumeros(5));