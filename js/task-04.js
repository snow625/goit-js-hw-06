const valueOfCounter = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let counter = 0;

decrementBtn.addEventListener('click', () => {
  counter -= 1;
  valueOfCounter.textContent = counter;
});

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', () => {
  counter += 1;
  valueOfCounter.textContent = counter;
});
