const changeColorOnBodyBtn = document.querySelector('.change-color');
changeColorOnBodyBtn.addEventListener('click', onChangeColor);
const body = document.querySelector('body');
const colorValue = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onChangeColor() {
  body.style.backgroundColor = `${getRandomHexColor()}`;
  colorValue.textContent = `${body.style.backgroundColor}`;
  console.log('change');
}
console.dir(body);
