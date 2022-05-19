const numberOfCategories = document.querySelectorAll('#categories .item').length;
console.log(`Number of categories: ${numberOfCategories}`);

const numberOfElements = [...document.querySelectorAll('#categories  ul')].map(
  el => el.children.length
);
const allTitleOfCategory = [...document.querySelectorAll('#categories h2')].map(el => el.innerText);

const message = numberOfElements.map((el, i) =>
  console.log(`Category: ${allTitleOfCategory[i]}\nElements: ${el}`)
);
