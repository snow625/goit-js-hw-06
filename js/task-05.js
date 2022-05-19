const spanName = document.querySelector('#name-output');

const inputPlace = document.querySelector('#name-input');
inputPlace.addEventListener('input', onInputChangeName);

function onInputChangeName(event) {
  event.target.value === ''
    ? (spanName.textContent = 'Anonymous')
    : (spanName.textContent = event.target.value);
}
