const clickCounter = () => {
  clickCount += 1;
  counter.innerText = clickCount;
}

let clickCount = 0;
const clickButton = document.querySelector('#click-btn');
const counter = document.querySelector('#counter');
clickButton.addEventListener('click', clickCounter);