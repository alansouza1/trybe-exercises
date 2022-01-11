let selectedHoliday = false;
let selectedFriday = false;
const fridayDays = [4, 11, 18, 25];

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const dayListItem = document.createElement('li');    
    if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
      dayListItem.className = 'day holiday';
    } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18) {
      dayListItem.className = 'day friday';      
    } else if (dezDaysList[index] === 25) {
      dayListItem.className = 'day holiday friday';
    } else {
      dayListItem.className = 'day';
    }
    dayListItem.innerHTML = days;

    monthDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheMonth();

function createButtonHoliday(name) {
  const buttonsContainer = document.querySelector('.buttons-container');

  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = name;

  buttonsContainer.appendChild(button);
}

createButtonHoliday('Feriados');

function addEventButtonHoliday() {
  const button = document.querySelector('#btn-holiday');
  button.addEventListener('click', changeBackgroundColor);
}

function changeBackgroundColor() {
  const holidays = document.querySelectorAll('.holiday');

  for (let index = 0; index < holidays.length; index += 1) {
    const holiday = holidays[index];

    if (selectedHoliday) {
      holiday.style.backgroundColor = '#eee';
    } else {
      holiday.style.backgroundColor = '#fff';
    }
  }
  selectedHoliday = !selectedHoliday;
}

addEventButtonHoliday();

function createButtonFriday(name) {
  const buttonsContainer = document.querySelector('.buttons-container');

  const button = document.createElement('button');
  button.id = 'btn-friday';
  button.innerText = name;

  buttonsContainer.appendChild(button);
}

createButtonFriday('Sexta-feira');

function addEventButtonFriday() {
  const button = document.querySelector('#btn-friday');
  button.addEventListener('click', changeText);
}

function changeText() {
  const fridays = document.querySelectorAll('.friday');

  for (let index = 0; index < fridays.length; index += 1) {
    const friday = fridays[index];

    if (selectedFriday) {
      friday.innerText = fridayDays[index];
    } else {
      friday.innerText = 'SEXTOU o/';
    }
  }
  selectedFriday = !selectedFriday;
}

addEventButtonFriday();

function addEventDays() {
  const days = document.querySelectorAll('.day');

  for (let index = 0; index < days.length; index += 1) {
    const day = days[index];

    day.addEventListener('mouseover', zoomIn);
    day.addEventListener('mouseout', zoomOut)
  }
}

addEventDays();

function zoomIn(event) {
  const day = event.target;
  day.style.fontSize = '25px';
  day.style.fontWeight = 'bold';
}

function zoomOut(event) {
  const day = event.target;
  day.style.fontSize = '20px';
  day.style.fontWeight = 'normal';
}

function createTask(task) {
  const myTasks = document.querySelector('.my-tasks');

  const taskElement = document.createElement('span');
  taskElement.innerText = task;

  myTasks.appendChild(taskElement);
}

createTask('Projeto:');

function addLegendColorToTask(color) {
  const myTasks = document.querySelector('.my-tasks');

  const legend = document.createElement('div');
  legend.className = 'task';
  legend.style.backgroundColor = color;

  myTasks.appendChild(legend);
}

addLegendColorToTask('green');