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