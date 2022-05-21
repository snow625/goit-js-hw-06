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

  let formData = new FormData(submitForm);
  formData.forEach((value, inputName) => {
    console.log(`${inputName}: ${value}`);
  });

  submitForm.reset();
}
