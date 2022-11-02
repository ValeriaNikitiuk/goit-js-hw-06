const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('ul');
console.log(listEl);

for (let i = 0; i < ingredients.length; i++) {
  const elIngredients = document.createElement('li');
  elIngredients.textContent = ingredients[i];
  listEl.append(elIngredients)

  console.log(listEl);
  console.log(elIngredients);
}

// const list = ingredients.reduce((string, item) => string + `<li>${item}</li>`, '');
// console.log(list);



// const listEl = document.createElement('li');
// listEl.classList.add('item');
// listEl.textContent = ingredients[0];
// console.log(listEl);

// const listEl_1 = document.createElement('li');
// listEl_1.classList.add('item');
// listEl_1.textContent = ingredients[1];
// console.log(listEl_1);


// const listEl_2 = document.createElement('li');
// listEl_2.classList.add('item');
// listEl_2.textContent = ingredients[2];
// console.log(listEl_2);

// const listEl_3 = document.createElement('li');
// listEl_3.classList.add('item');
// listEl_3.textContent = ingredients[3];
// console.log(listEl_3);

// const listEl_4 = document.createElement('li');
// listEl_4.classList.add('item');
// listEl_4.textContent = ingredients[4];
// console.log(listEl_4); 

// const listEl_5 = document.createElement('li');
// listEl_5.classList.add('item');
// listEl_5.textContent = ingredients[5];
// console.log(listEl_5); 

// const result = list.append(listEl, listEl_1, listEl_2, listEl_3, listEl_4, listEl_5);
