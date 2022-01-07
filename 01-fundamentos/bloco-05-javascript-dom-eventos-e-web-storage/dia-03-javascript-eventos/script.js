let selected = false;

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

function createButton(name) {
  const buttonsContainer = document.querySelector('.buttons-container');

  const button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = name;

  buttonsContainer.appendChild(button);
}

createButton('Feriados');

function addEventButton() {
  const button = document.querySelector('#btn-holiday');
  button.addEventListener('click', changeBackgroundColor);
}

function changeBackgroundColor() {
  const holidays = document.querySelectorAll('.holiday');

  for (let index = 0; index < holidays.length; index += 1) {
    const holiday = holidays[index];

    if (selected) {
      holiday.style.backgroundColor = '#eee';
    } else {
      holiday.style.backgroundColor = '#0f0';
    }
  }
  selected = !selected;
}

addEventButton();