const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const locationEl = '#ingredients';

const makeElInHtml = (arr, place) => {
  const arrOfIngredientsItems = arr.map(el => document.createElement('li'));
  arrOfIngredientsItems.map((el, i) => {
    el.classList = 'item';
    el.textContent = arr[i];
    const listOfIngredients = document.querySelector(`${place}`);
    listOfIngredients.append(...arrOfIngredientsItems);
  });
};
makeElInHtml(ingredients, locationEl);
