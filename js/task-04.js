const counter = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', () => (counter.textContent -= 1));

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener(
  'click',
  () => (counter.textContent = Number(counter.textContent) + 1)
);
