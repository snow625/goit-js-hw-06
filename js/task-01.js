const categories = document.querySelector('#categories');
const itemsOfCategories = [...categories.children];
console.log(`Number of categories: ${itemsOfCategories.length}`);

itemsOfCategories.forEach(el => {
  const titleText = el.querySelector('h2').textContent;
  const numberOfItems = el.querySelectorAll('li').length;
  console.log(`Category: ${titleText}\nElements: ${numberOfItems}`);
});
