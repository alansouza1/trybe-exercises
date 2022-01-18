const colors = ['#fff', '#f00', '#0f0', '#00f'];
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.change-background button');

for (let index = 0; index < buttons.length; index += 1) {
  const button = buttons[index];
  button.style.backgroundColor = colors[index];
  button.addEventListener('click', changeBackgroundColor);
}

function changeBackgroundColor(event) {
  const button = event.target;
  const color = button.style.backgroundColor;

  body.style.backgroundColor = color;
}