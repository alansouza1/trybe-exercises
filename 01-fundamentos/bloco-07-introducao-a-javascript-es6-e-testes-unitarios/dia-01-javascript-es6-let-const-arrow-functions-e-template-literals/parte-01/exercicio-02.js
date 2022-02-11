const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const orderArray = (array) => {
  const result = array;
  for (let index = 0; index < result.length; index += 1) {
    for (let index2 = 0; index2 < result.length; index2 += 1) {
      const number = result[index2];
      const nextNumber = result[index2 + 1];
      if (number > nextNumber) {
        result[index2] = nextNumber;
        result[index2 + 1] = number;
      }
    }
  }
  return result;
}

console.log(`Os números ${orderArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);