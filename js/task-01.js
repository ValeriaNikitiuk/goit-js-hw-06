// Порахує і виведе в консоль кількість категорій в ul#categories,
//     тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе
//  в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів 
//  в категорії(усіх < li >, вкладених в нього).





const ul = document.querySelectorAll('#categories>li');


ul.forEach(el => {
      console.log(
          `Категорія: ${el.firstElementChild.textContent}, 
    Кількість елементів: ${el.lastElementChild.children.length}`,
  );
});




// console.log("Category:", navLinks[0].children[0].innerHTML);
// console.log("Elements:", navLinks[0].querySelectorAll('li').length);

// console.log("Category:", navLinks[1].children[0].innerHTML);
// console.log("Elements:", navLinks[1].querySelectorAll('li').length);

// console.log("Category:", navLinks[2].children[0].innerHTML);
// console.log("Elements:", navLinks[2].querySelectorAll('li').length);















