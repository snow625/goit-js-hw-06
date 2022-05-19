const validInput = document.querySelector('#validation-input');
validInput.addEventListener('blur', onFocusCorect);
const numbersInValid = Number(validInput.getAttribute('data-length'));

function onFocusCorect() {
  if (validInput.value.length === numbersInValid) {
    validInput.classList.add('valid');
    validInput.classList.remove('invalid');
  } else if (validInput.value.length !== 0) {
    validInput.classList.add('invalid');
    validInput.classList.remove('valid');
  } else {
    validInput.classList.remove('invalid', 'valid');
  }
}
