// 1. Є такий код:
// let x = 1;
// let y = 2;

// let res1 = `${x}${y}`;
// let res1 = x + `${y}`;
// let res1 = `${x}` + y;
// let res1 = `String(x) + String(y)`;
// let res1 = x + String(y);
// let res1 = String(x) + y;
// let res1 = x + '' + y;
// let res1 = x + (y + '');
// let res1 = x.toString() + y.toString();
// let res1 = x + y.toString();
// let res1 = x.toString() + y;

// console.log(res1);
// console.log(typeof res1);

// let res2 = Boolean(x) + String(y);
// console.log(res2);
// console.log(typeof res2);

// let res3 = Boolean(x);
// console.log(res3);
// console.log(typeof res3);

// let res4 = parseInt(Boolean(x));
// console.log(res4);
// console.log(typeof res4);

// 2. Користувач вводить число(використовуйте prompt()).Необхідно перевірити чи є введене число
// a) парним додатним;
// b) кратним числу 7.
// Результат перевірки вивести в консоль.

// let user = prompt("Enter the number", "");
// let a = user % 2 === 0 && user > 0;
// console.log(a);
// let b = user % 7 === 0;
// console.log(b);

// 3. Створіть порожній масив;
// 1) У перший елемент масиву запишіть будь - яке число;
// 2) У другій елемент масиву запишіть будь - який рядок;
// 3) У третій елемент масиву запишіть будь - логічне значення;
// 4) У четвертий елемент масиву запишіть значення null;
// 5) Виведіть на екран число елементів, яке зберігається в масиві;
// 6) Запитайте у користувача ввести будь - яке значення і запишіть це значення в п'ятий елемент масиву;
// 7) Виведіть на екран п'ятий елемент масиву.
// 8) Видаліть 1 - ий елемент масиву і виведіть масив на екран.

// let arr = [27, "Lviv", false, null];
// alert(arr.length);
// let user = prompt("Enter any value", "");
// arr.push(user); // arr[5] = user;
// alert(user);
// arr.shift();
// alert(arr);

// 4. Напишіть програму, яка для об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
// Початковий масив:
// let cities = ["Rome", "Lviv", "Warsaw"];
// Результуючий масив:
// "Rome*Lviv*Warsaw"

// let cities = ["Rome", "Lviv", "Warsaw"];
// let str = cities.join('*');
// console.log(str);

// 5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку.
// Результат запишіть в змінну isAdult.
// Взалежності від отриманого значення виведіть відповідне повідомлення про статус особи.
//     Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”.
// Якщо вік менше 10 років вивести “Ви ще надто молоді”,

// let user = prompt("Do you have 18 years?", "");
// let isAdult = user;
// if (isAdult > 18) {
//     alert("You have reached the age of majority!")
// } else if (isAdult < 10) {
//     alert("You are still too young!")
// };

// 6. Користувач вводить три довжини сторін трикутника(використовуйте prompt() три рази для введення кожної сторони).
//     Необхідно:
// a) визначити і вивести в консоль площу трикутника
// b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення додатні, в іншому випадку вивести:
// 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).


// let a1 = prompt("Enter the length of the side triangle?", "");
// let b1 = prompt("Enter the length of the side triangle?", "");
// let c1 = prompt("Enter the length of the side triangle?", "");
// let a = Number(a1);
// let b = Number(b1);
// let c = Number(c1);
// let p = (a + b + c) * 0.5;
// let s = Math.sqrt(p * (p-a) * (p-b) * (p-c));
// console.log(s.toFixed(3));

// if(a===b || a===c || b===c){
//     console.log("rectangular");
// } else {
//     console.log("not rectangular");
// };

// if ((a >= 0) && (b >= 0) && (c >= 0)) {
//     console.log('Positive');
// } else {
//     console.log('Incorrect data');
// };

// 7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання.
// Потрібно отримати реальний час доби із системи.
//     Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23 - 5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5 - 11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11 - 17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17 - 23 – має виводитися привітання “Доброго вечора”.

// let currDay = new Date();
// let dayTime = currDay.getHours();
// if (dayTime >= 23 && dayTime < 5) {
//     alert("Good night");
// } else if (dayTime >= 5 && dayTime < 11) {
//     alert("Good morning");
// } else if (dayTime >= 11 && dayTime < 17) {
//     alert("Good day");
// } else if (dayTime >= 17 && dayTime < 23) {
//     alert("Good evening");
// };

// switch (true) {
//     case dayTime < 5:
//         alert("Good night");
//         break;
//     case dayTime >= 5 && dayTime < 11:
//         alert("Good morning");
//         break;
//     case dayTime >= 11 && dayTime < 17:
//         alert("Good day");
//         break;
//     case dayTime < 23:
//         alert("Good evening");
//         break;
//     default:
//         alert("none");
//         break;
// };

// switch (dayTime) {
//     case 23:
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         alert("Good night");
//         break;
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//     case 11:
//         alert("Good morning");
//         break;
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//         alert("Good day");
//         break;
//     case 17:
//     case 18:
//     case 19:
//     case 20:
//     case 21:
//     case 22:
//     case 23:
//         alert("Good evening");
//         break;
// };
