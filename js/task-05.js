
const input = document.querySelector('#name-input');
console.log(input);

const output = document.querySelector('#name-output');
console.log(output);

 input.addEventListener('input', (event) => {
        output.textContent = event.currentTarget.value;
    })


if (input.value.length === 0) {
    output.textContent = "Anonymous";
} else (
   input = 'input'
   );

