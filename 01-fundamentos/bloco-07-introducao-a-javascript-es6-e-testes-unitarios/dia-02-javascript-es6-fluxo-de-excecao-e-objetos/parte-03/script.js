const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addShift = (obj, key, value) => obj[key] = value;
addShift(lesson2, 'turno', 'noite');
console.log(lesson2);

const listKeys = obj => console.log(Object.keys(obj));
listKeys(lesson1);

const objLength = obj => console.log(Object.keys(obj).length);
objLength(lesson3);

const objValues = obj => console.log(Object.values(obj));
objValues(lesson1);

const allLessons = {lesson1, lesson2, lesson3};
console.log(allLessons);

const sumStudents = obj => {
  let total = 0;
  const studentsArray = Object.keys(obj);
  for (value of studentsArray) {
    total += obj[value].numeroEstudantes;
  };
  return total;
};
console.log(sumStudents(allLessons));

const getValueByNumber = (obj, index) => {
  const objArray = Object.values(obj);
  return objArray[index];
};
console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, key, value) => obj[key] === value ? true : false;
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

const studentsMath = (obj) => {
  const keys = Object.keys(obj);
  let totalStudents = 0;
  for (key of keys) {
    if (obj[key].materia === 'Matemática') {
      totalStudents += obj[key].numeroEstudantes;
    }
  };
  return totalStudents;
};
console.log(studentsMath(allLessons));

const createReport = (obj, teacher) => {
  const keys = Object.keys(obj);
  let subjects = [];
  let students = 0;
  for (key of keys) {
    if (obj[key].professor === teacher) {
      subjects.push(obj[key].materia);
      students += obj[key].numeroEstudantes;
    };
  };
  return {
    professor: teacher,
    aulas: subjects,
    estudates: students
  };
};
console.log(createReport(allLessons, 'Maria Clara'));