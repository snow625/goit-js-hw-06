const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const locationEl = '#ingredients';

const makeElInHtml = (arr, place) => {
  const arrOfItem = arr.map((el, i, arr) => {
    const item = document.createElement('li');
    item.classList = 'item';
    item.textContent = arr[i];
    return item;
  });
  const listOfIngredients = document.querySelector(`${place}`);
  listOfIngredients.append(...arrOfItem);
};
makeElInHtml(ingredients, locationEl);
