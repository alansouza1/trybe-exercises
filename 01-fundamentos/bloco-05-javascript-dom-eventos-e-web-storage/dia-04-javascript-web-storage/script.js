const colors = ['#fff', '#000', '#f00', '#0f0', '#00f'];
const body = document.querySelector('body');
const backgroundColorButtons = document.querySelectorAll('.change-background-color button');
const textColorButtons = document.querySelectorAll('.change-text-color button');

function addColorToButtons(buttons) {
  for (let index = 0; index < buttons.length; index += 1) {
    const button = buttons[index];
    button.style.backgroundColor = colors[index];
  }
}

addColorToButtons(backgroundColorButtons);
addColorToButtons(textColorButtons);

function addEventToButtons(buttons, func) {
  for (let index = 0; index < buttons.length; index += 1) {
    const button = buttons[index];
    button.addEventListener('click', func);
  }
}

addEventToButtons(backgroundColorButtons, changeBackgroundColor);
addEventToButtons(textColorButtons, changeTextColor);

function changeBackgroundColor(event) {
  const button = event.target;
  const color = button.style.backgroundColor;

  body.style.backgroundColor = color;
}

function changeTextColor(event) {
  const button = event.target;
  const color = button.style.backgroundColor;

  const text = document.querySelector('main');
  text.style.color = color;
}