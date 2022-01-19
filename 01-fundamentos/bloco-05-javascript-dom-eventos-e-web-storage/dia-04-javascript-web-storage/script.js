const colors = ['#fff', '#000', '#f00', '#0f0', '#00f'];
const fontSizes = ['12px', '16px', '18px', '20px', '22px'];
const body = document.querySelector('body');
const main = document.querySelector('main');
const backgroundColorButtons = document.querySelectorAll('.change-background-color button');
const textColorButtons = document.querySelectorAll('.change-text-color button');
const fontSizeButtons = document.querySelectorAll('.change-font-size button');
const lineHeightButtons = document.querySelectorAll('.change-line-height button');
const fontFamilyButtons = document.querySelectorAll('.change-font-family button');

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
addEventToButtons(fontSizeButtons, changeFontSize);
addEventToButtons(lineHeightButtons, changeLineHeight);
addEventToButtons(fontFamilyButtons, changeFontFamily);

function changeBackgroundColor(event) {
  const button = event.target;
  const color = button.style.backgroundColor;

  body.style.backgroundColor = color;
}

function changeTextColor(event) {
  const button = event.target;
  const color = button.style.backgroundColor;

  main.style.color = color;
}

function changeFontSize(event) {
  const button = event.target;
  const fontSize = button.innerText;

  main.style.fontSize = fontSize;
}

function changeLineHeight(event) {
  const button = event.target;
  const lineHeight = button.innerText;

  main.style.lineHeight = lineHeight;
}

function changeFontFamily(event) {
  const button = event.target;
  const fontFamily = button.innerText;

  switch (fontFamily) {
    case 'Times New Roman':
      main.style.fontFamily = "'Times New Roman', Times, serif";
      break;
    case 'Arial':
      main.style.fontFamily = "Arial, Helvetica, sans-serif";
      break;
    case 'Courier New':
      main.style.fontFamily = "'Courier New', Courier, monospace";
      break;
    default:
      break;
  }
}