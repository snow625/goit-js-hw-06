function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputOfnumber = document.querySelector('input');
const createElBtn = document.querySelector('[data-create]');
createElBtn.addEventListener('click', createEl);
const destroyElBtn = document.querySelector('[data-destroy]');
const boxesPlace = document.querySelector('#boxes');

function createEl() {
  if (inputOfnumber.value === '' || inputOfnumber.value <= 0) {
    return alert('Please insert correct nubmers of Boxers');
  }
  createBoxes(inputOfnumber.value);

  destroyElBtn.addEventListener('click', () => {
    boxesPlace.innerHTML = '';
    inputOfnumber.value = '';
  });
}

function createBoxes(amount) {
  const arrOfBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    let el = document.createElement('div');
    el.style.backgroundColor = `${getRandomHexColor()}`;

    if (boxesPlace.children.length === 0) {
      if (i > 0) {
        const widthOfEl = Number.parseInt(arrOfBoxes[i - 1].style.width) + 10;
        const heightOfEl = Number.parseInt(arrOfBoxes[i - 1].style.height) + 10;
        el.style.width = `${widthOfEl}px`;
        el.style.height = `${widthOfEl}px`;
      } else {
        el.style.width = '30px';
        el.style.height = '30px';
      }
    } else {
      if (i > 0) {
        const widthOfEl = Number.parseInt(arrOfBoxes[i - 1].style.width) + 10;
        const heightOfEl = Number.parseInt(arrOfBoxes[i - 1].style.height) + 10;
        el.style.width = `${widthOfEl}px`;
        el.style.height = `${widthOfEl}px`;
      } else {
        el.style.width = `${Number.parseInt(boxesPlace.lastChild.style.width) + 10}px`;

        el.style.height = `${Number.parseInt(boxesPlace.lastChild.style.height) + 10}px`;
      }
    }

    arrOfBoxes.push(el);
  }

  boxesPlace.append(...arrOfBoxes);
}
