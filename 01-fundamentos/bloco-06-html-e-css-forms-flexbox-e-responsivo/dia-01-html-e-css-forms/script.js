const submitButton = document.querySelector('#btn-submit');
const inputName = document.querySelector('#user-name');
const inputEmail = document.querySelector('#user-email');
const inputAnswer = document.querySelector('#answer');
const checkbox = document.querySelector('#checkbox');

checkbox.addEventListener('click', changeValue);

function changeValue() {
  if (checkbox.value === 'off') {
    checkbox.value = 'on';
  } else {
    checkbox.value = 'off';
  }
}

submitButton.addEventListener('click', validation);

function validation(event) {
  if (inputName.value.length < 10 || inputName.value.length > 40 || inputEmail.value.length < 10 || inputEmail.value.length > 50 || inputAnswer.value.length > 500 || checkbox.value === 'off') {
    alertWrongData(event);
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

function alertWrongData(event) {
  event.preventDefault();
  alert('Dados Inválidos')
}