

// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//  і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const inputSize = document.querySelector('#font-size-control');
console.log(inputSize);

const spanText = document.querySelector('#text');
console.log(spanText);


inputSize.addEventListener('input', (event) => {

  console.log( inputSize.value);

   spanText.style.fontSize =  inputSize.value + "px";
});