
const input = document.querySelector('#validation-input');
console.log(input);



input.addEventListener('blur', () => {
    if (input.value.trim().length <= input.getAttribute('data-length')) {
    
    input.classList.add('valid');
    input.classList.remove('invalid');
        console.log('Yahoooo')
    }
    else {
    input.classList.remove('valid');
    input.classList.add('invalid');
        console.log('Error')
    }
})





