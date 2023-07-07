const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = ingredients.map( ingredient => {
  const liItemEl = document.createElement('li');
  liItemEl.textContent = ingredient;
  liItemEl.classList.add('item')
  return liItemEl;
});

const ingredientsContainerEl = document.querySelector('#ingredients');
ingredientsContainerEl.append(...ingredientsItems);
