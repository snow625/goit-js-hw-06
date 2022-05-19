const submitForm = document.querySelector('.login-form');
submitForm.addEventListener('submit', onSubmitForm);
const inputEmailPlase = submitForm.querySelector('[type="email"]');
const inputPasswordPlase = submitForm.querySelector('[type="password"]');

function onSubmitForm(event) {
  event.preventDefault();
  if (inputEmailPlase.value === '') {
    return alert('Dear User please insert your Email.)');
  } else if (inputPasswordPlase.value === '') {
    return alert('Dear User please insert your Password.)');
  }
  console.log({
    [inputEmailPlase.getAttribute('type')]: inputEmailPlase.value,
    [inputPasswordPlase.getAttribute('type')]: inputPasswordPlase.value,
  });
  submitForm.reset();
}
