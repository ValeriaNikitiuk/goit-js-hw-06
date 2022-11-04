const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery');



// const createEl = el => {
//   const ingredientItem = list.insertAdjacentHTML(
//     'afterbegin',
//     `<li><img src = "${el.url}" alt = "${el.alt}"  width = "350" height = "220" /></li>`,
//   );
//   return ingredientItem
// };


const list_1 = images.map((image) => list.insertAdjacentHTML(
  'afterbegin',
  `<li><img src = "${image.url}" alt = "${image.alt}"  width = "350" height = "220" /></li>`,
)).join("");
  
console.log(list_1)
list.append(...list_1);
console.log(list)

//  ingredientItem.textContent = el;
// ingredientItem.classList.add('item');
 
// return ingredientItem
  
// }



// const list_1 = images.map(element => {
//  list.insertAdjacentHTML(
//     'afterbegin',
//     `<li><img src = "${element.url}" alt = "${element.alt}"  width = "350" height = "220" /></li>`,
//   );
// });

// console.log(list)
// list.append(...list_1);


// images.forEach(element => {
//  list.insertAdjacentHTML(
//     'afterbegin',
//     `<li><img src = "${element.url}" alt = "${element.alt}"  width = "350" height = "220" /></li>`,
//   );
// });

// console.log(list)