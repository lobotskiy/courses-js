/*2.Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище.    
    Підключіть створений файл до HTML-документу.*/

// let lastName = "Lobotskiy";
// console.log(lastName); 

/*3.a) оголосіть дві змінні;
    b) запишіть у змінні будь-які значення;
    c) виведіть на екран значення змінних;
    d) скопіюйте значення однієї змінної в іншу;
    e) виведіть на екран значення змінних.*/

// let a, b;
// a = "hello";
// b = "world";
// alert(a);
// alert(b);
// a = b;
// alert(a);
// alert(b);

/*4.Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. 
    Значення кожної властивості повинно відповідати відповідному примітивному типу даних.*/

// let x;
// let newObj = {
//     String: "100",
//     Number: 100,
//     Boolean: true,
//     Undefined: x,
//     Null: null
// }
// console.log(typeof newObj.String);
// console.log(typeof newObj.Number);
// console.log(typeof newObj.Boolean);
// console.log(typeof newObj.Undefined);
// console.log(typeof newObj.Null);


/*5.Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. 
    Результат запишіть в змінну isAdult і виведіть в консоль.*/

// let isAdult = confirm("Do you have 18 years?");
// console.log(isAdult)

/* 6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
 	- ваше ім’я
 	- ваше прізвище
 	- навчальна група
 	- ваш рік народження.
    Присвойте змінним відповідні значення. 
    Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
    Визначте тип кожної змінної.
    Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
    Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.*/

// let firstName = "Dima";
// let lastName = "Lobotskiy";
// let studyGroup = "ITacademy";
// let yearBirth = 1992;
// let maritalStatus;
//     maritalStatus = true;
// console.log(typeof yearBirth);
// console.log(typeof maritalStatus);
// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof studyGroup);

// let num = null;
// let un;
// console.log(typeof num*2);
// console.log(typeof un);

/*7.За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль,
    і виводить на екран повідомлення із введеними даними.
    Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.*/

// let login = prompt("Your login?", "...");
// let email = prompt("Your email?", "...");
// let pass = prompt("Your password?","...")
// alert(`Dear user, your login ${login}, your email is ${email}, your password is ${pass}`);

/*8.Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці,
    записує результати в відповідні змінні, і виводить їх значення на екран.*/

// let minute = 60;
// let hour = minute * 60;
// let era = hour * 24;
// let month = era * 30;
// alert(hour);
// alert(era);
// alert(month);