const fatorial = number => {
  let result = 1;
  for (let index = number; index > 1; index -= 1) {
    result = result * index;
  }
  return result;
}

console.log(fatorial(4));