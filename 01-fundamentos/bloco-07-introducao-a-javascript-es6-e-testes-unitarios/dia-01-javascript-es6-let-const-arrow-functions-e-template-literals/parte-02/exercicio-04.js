const skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'Linux'];

const changeLetterX = (str) => {
  let myString = 'Tryber x aqui!';
  myString = myString.split('');

  for (let index = 0; index < myString.length; index += 1) {
    let currentLetter = myString[index];
    if (currentLetter === 'x') {
      myString[index] = str;
    }
  }
  let result = myString.join('');
  return result;
}

const concatenate = (str) => {
  const sortedSkills = skills.sort();
  const result = `${str} Minhas cinco principais habilidades são: ${sortedSkills}.`;
  return result;
}

const string = changeLetterX('Alan');

console.log(concatenate(string));