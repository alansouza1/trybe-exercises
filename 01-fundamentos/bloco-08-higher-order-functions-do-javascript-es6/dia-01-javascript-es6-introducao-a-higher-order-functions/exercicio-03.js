const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswers, studentAnswers) => {
  let result = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (rightAnswers[index] === studentAnswers[index]) {
      result += 1;
    } else if (studentAnswers[index] !== 'N.A') {
      result -= 0.5;
    }
  }
  return result;
};

const countPoints = (rightAnswers, studentAnswers, callback) => {
  const points = callback(rightAnswers, studentAnswers);
  return points;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));