const longestWord = (phrase) => {
  const words = phrase.split(' ');
  let biggestWord = words[0];
  for (let index = 1; index < words.length; index += 1) {
    if (words[index].length >= biggestWord.length) {
      biggestWord = words[index];
    }
  }
  return biggestWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));