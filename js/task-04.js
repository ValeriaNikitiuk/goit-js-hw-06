

const object = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
     console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const decBtn = document.querySelector('button[data-action="decrement"]');
console.log(decBtn);

const incBtn = document.querySelector('button[data-action="increment"]');
console.log(incBtn);

const value = document.querySelector('#value');
console.log(value);




decBtn.addEventListener('click', function () {
    console.log('клік на 1');
    
    object.decrement();
    console.log(object);

    value.textContent = object.value;
});


incBtn.addEventListener('click', function () {
    console.log('клік на -1');
    
    object.increment();
    console.log(object);

    value.textContent = object.value;
});