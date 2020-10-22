
// 1. Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
// Приклад роботи:
// upperCase('regexp');
// upperCase('RegExp');
// String's not starts with uppercase character 
// String's starts with uppercase character

// function upperCase(str) {
//     let regExp = /^[A-Z]/;
//     if (regExp.test(str)) {
//         console.log("String's starts with uppercase character");
//     } else {
//         console.log("String's not starts with uppercase character ");
//     }
// }
// upperCase('regexp');
// upperCase('RegExp');


// 2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. 
// Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true

// function checkEmail(str){
//     let emailRe = /\S+@\S+\.\S+/;
//     alert(emailRe.test(str));
// }

// checkEmail("Qmail2@gmail.com")

// 3. Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, за якою йде одна чи більше b, за якими одна d. Запам’ятати знайдені b і наступну за ними d.
//   Враховувати верхній і нижній регістр.
//  Приклад роботи:   
//  Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"]

// let re = /d(b+)(d)/i;
// let arr = re.exec("cdbBdbsbz");
// console.log(arr)

// 4. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// 	Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”

// let re = /(\w+)\s(\w+)/;
// let str = "Java Script";
// let newStr = str.replace(re, "$2, $1");
// console.log(newStr);

// 5. Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

// function checkCard(str) {
//     let numCard = /^\d{4}-\d{4}-\d{4}-\d{4}\b/;
//     if (str.match(numCard)) {
//         console.log("Correct validation")
//     } else {
//         console.log("Incorrect validation")
//     }
// }
// checkCard('9898-9879-9879-9043');
// checkCard('9fw8-9879-9e79-9043');


// 6. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// 	Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
// •  Символ “-” не може повторюватися.

// checkEmail('my_mail@gmail.com');
// Email is correct!
// checkEmail('#my_mail@gmail.com');
// Email is not correct!

// function checkEmail(str) {
//     let myEmail = /^\w+([\.-]?\w+)*@([\.]?\w+)*(\.\w{2,3})+$/;
//     if (myEmail.test(str)) {
//         console.log("Email is correct")
//     } else {
//         console.log("Email is not correct")
//     }
// }
// checkEmail('my_mail@gmail.com');
// checkEmail('#my_mail@gmail.com');

// 7. Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та цифри, номер не може бути першим. 
//    Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
//     Приклад роботи:
// checkLogin('ee1.1ret3');
// true 
// 1.1, 3
// checkLogin('ee1*1ret3');
// false 
// 1, 1, 3

// function checkLogin(data) {
//     let re = /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,9}$/;
//     let numb = /[0-9\.]+/g;
//     let resultNumb = data.match(numb);
//     let result = re.test(data);
//     console.log(`${data}is ${result} - ${resultNumb}`);
// }
// checkLogin('ee1.1ret3');
// checkLogin('ee1*1ret3');