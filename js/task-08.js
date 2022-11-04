
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я
//  поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів 
//  форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const form = document.querySelector('.login-form');
console.log(form)

form.addEventListener('submit', handleSubmit);



function handleSubmit(event) {
  event.preventDefault();
 const {
        elements: { email, password },
    } = event.currentTarget;
  
  
  if (email.value === "" || password.value === "") {
    return alert("Заповніть усі поля!");
  }
  
      
const formData = new FormData;
formData.append('email', `${email.value}`);
formData.append('password', `${password.value}`);

for (const value of formData.values()) {
   console.log(value);
}

  event.currentTarget.reset(); 
};
 











