// 1. Напишіть функцію testThrow(), яка прийматиме параметр помилка exception і перевірятиме роботу оператора throw, зокрема той факт, 
// що як об’єкт помилки можна передати значення будь-якого типу.
//  Приклад результату:
//  > testThrow(5);
//  Caught: 5
//  > testThrow('Test');
//  Caught: Test
//  > testThrow(new Error('An error happened'));
//  Caught: Error: An error happened

// function testThrow(exception) {
//     try {
//         throw new Error(exception);
//     }
//     catch (e) {

//         console.log("testThrow(" + e.message + ")")
//     }  
// } 
// testThrow(5);
// testThrow("Test");
// testThrow(new Error('An error happened'));

// 2. Реалізуйте функцію calcRectangleArea(), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height 
// і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.

// function calcRectangleArea(width, height) {
//     if (isNaN(width) || isNaN(height)) {
//         throw "Parameter is not a number ";
//     };
//     return width * height;
// };
// try {
//     alert(calcRectangleArea(5, "z"));
// }
// catch (e) {
//     console.log(e);
// };

// 3. Напишіть функцію checkAge(), яка пропонуватиме юзеру ввести свій вік і генерувати в модальному вікні помилки у випадку, коли: 
// 	- юзер ввів порожню стрічку (наприклад “The field is empty! Please enter your age”), 
// 	- нечислове значення
// 	- вік юзера менше 14 років. 
// В іншому разі юзер отримує доступ до перегляду фільму.
// В блокові catch передбачити виведення назви і опису помилки.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.	

// function checkAge() {
//     try {
//         let age = prompt("Please enter your age!");
//         if (age == "")
//             throw new Error("The field is empty! Please enter your age!")
//         else if (isNaN(parseInt(age)))
//             throw new Error("Please enter number!")
//         else if (age < 14)
//             throw new Error("Sorry but you too young!")
//         alert("Enjoy the movie!")
//     }
//     catch (e) {
//         alert(e.name + " " + e.message)
//     }
// };
// checkAge();

// 4. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
// Функція повертає назву місяця відповідно до введеного номера місяця. 
// У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// 	Приклад роботи програми:
// > console.log(showMonthName(5)); 
// May
// > console.log(showMonthName(14)); 
// MonthException Incorrect month number

// class MonthException {
//     constructor(message) {
//         this.message = message;
//         this.name = "MonthException";
//     }
// }
// function showMonthName(month) {
//     month = month - 1;
//     let months = ["Jan", "Feb" , "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     if (months[month] !== undefined) {
//         return months[month];
//     } else {
//         throw new MonthException("Incorrect month number");
//     }
// }
// try {
//     let newMonth = 14;
//     let monthNane = showMonthName(newMonth);
//     console.log(monthNane)
// } catch (e) {
//     monthNane = "unknown";
//     console.error(e.name, e.message);
// };

// 5. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. 
// Також функція викидає помилку у разі якщо введено від’ємне id.
// 	Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids 
// на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів де значеннями ключів є коректні елементи ids.

// 	Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]

// function showUser(id) {
//     if (id < 0) {
//         throw new Error("iD must not be negative: " + id);
//     }
//     return { id: id };
// }
// function showUsers(ids) {
//     let result = [];
//     ids.forEach(function (id) {
//         try {
//             let person = showUser(id);
//             result.push(person);
//         } catch (exception) {
//             console.log(exception.message);
//         }
//     });
//     return result;
// }
// showUsers([7, -12, 44, 22]);