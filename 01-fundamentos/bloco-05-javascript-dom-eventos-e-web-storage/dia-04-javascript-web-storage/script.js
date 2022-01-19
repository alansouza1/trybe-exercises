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
  let preferences = JSON.parse(localStorage.getItem('preferences'));

  if (event !== undefined) {
    const button = event.target;
    const color = button.style.backgroundColor;
  
    body.style.backgroundColor = color;
    preferences.backgroundColor = color;
    localStorage.setItem('preferences', JSON.stringify(preferences));

  } else {
    const color = preferences.backgroundColor;
    body.style.backgroundColor = color;
  }
}

function changeTextColor(event) {
  let preferences = JSON.parse(localStorage.getItem('preferences'));

  if (event !== undefined) {
    const button = event.target;
    const color = button.style.backgroundColor;
  
    main.style.color = color;
    preferences.textColor = color;
    localStorage.setItem('preferences', JSON.stringify(preferences));
  } else {
    const color = preferences.textColor;
    main.style.color = color;
  }

}

function changeFontSize(event) {
  let preferences = JSON.parse(localStorage.getItem('preferences'));

  if (event !== undefined) {
    const button = event.target;
    const fontSize = button.innerText;
  
    main.style.fontSize = fontSize;
    preferences.fontSize = fontSize;
    localStorage.setItem('preferences', JSON.stringify(preferences));
  } else {
    const fontSize = preferences.fontSize;
    main.style.fontSize = fontSize;
  }

}

function changeLineHeight(event) {
  let preferences = JSON.parse(localStorage.getItem('preferences'));

  if (event !== undefined) {
    const button = event.target;
    const lineHeight = button.innerText;
  
    main.style.lineHeight = lineHeight;
    preferences.lineHeight = lineHeight;
    localStorage.setItem('preferences', JSON.stringify(preferences));
  } else {
    const lineHeight = preferences.lineHeight;
    main.style.lineHeight = lineHeight;
  }
  
}

function changeFontFamily(event) {
  let preferences = JSON.parse(localStorage.getItem('preferences'));

  if (event !== undefined) {
    const button = event.target;
    const fontFamily = button.innerText;
  
    switch (fontFamily) {

      case 'Times New Roman':
        main.style.fontFamily = "'Times New Roman', Times, serif";
        preferences.fontFamily = 'Times New Roman';
        localStorage.setItem('preferences', JSON.stringify(preferences));
        break;

      case 'Arial':
        main.style.fontFamily = "Arial, Helvetica, sans-serif";
        preferences.fontFamily = 'Arial';
        localStorage.setItem('preferences', JSON.stringify(preferences));
        break;

      case 'Courier New':
        main.style.fontFamily = "'Courier New', Courier, monospace";
        preferences.fontFamily = 'Courier New';
        localStorage.setItem('preferences', JSON.stringify(preferences));
        break;
        
      default:
        break;
    }
  } else {
    const fontFamily = preferences.fontFamily;

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

}

window.onload = function initialRenderization() {
  if (localStorage.getItem('preferences') === null || localStorage.getItem('preferences') === '{}') {
    localStorage.setItem('preferences', JSON.stringify({}));
  } else {
    changeBackgroundColor();
    changeTextColor();
    changeFontSize();
    changeLineHeight();
    changeFontFamily();
  }
}