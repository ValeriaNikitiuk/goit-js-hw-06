function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку 
// на button.change - color і виводить значення кольору в span.color


const spanColor = document.querySelector('.color');
console.log(spanColor);


const changeBtn = document.querySelector('.change-color');
console.log(changeBtn);








const handleClick = (event) => { 
  const bg_Color = getRandomHexColor(); 
  spanColor.textContent = bg_Color;
  document.body.style.backgroundColor = bg_Color;
 console.log(handleClick)

}


changeBtn.addEventListener("click", handleClick);