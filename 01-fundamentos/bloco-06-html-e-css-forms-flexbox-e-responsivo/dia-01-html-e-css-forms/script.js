const submitButton = document.querySelector('#btn-submit');
submitButton.addEventListener('click', doNothing);

function doNothing(event) {
  event.preventDefault();
}