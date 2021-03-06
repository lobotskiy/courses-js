// 1. Заданий масив з елементами [2, 3, 4, 5]. За допомогою циклу for знайдіть добуток елементів цього масиву. 
// Також реалізуйте завдання через while.

// let arr = [2, 3, 4, 5];
// let result = 1;

// for(let i = 0; i < arr.length; i++){
//     result *= arr[i];
// };
// console.log(result);

// let i = 0;
// while (i < arr[i]){
//     result *= arr[i];
//     i++;
// }
// console.log(result);

// 2. Напишіть JavaScript for цикл, який буде ітеруватися від 0 до 15. 
// Для кожної ітерації він перевірятиме, чи є поточне число парним чи непарним, і відображатиме повідомлення на екрані.
// Sample Output: "0 is even" "1 is odd" "2 is even"

// for (let i = 0; i <= 15; i++){
// if (i % 2 === 0){
//     alert(i + " " + "is even");
// } else {
//     alert(i + " " + "is odd");
// };
// };

// 3. Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// Sample Output:
/*randArray(5);399,310,232,379,40*/

// let k = [];
// function randArray(k) {
//     for(let i = 0; i <= 4; i++){
//         k[i] = getRandomInt(1, 500);
//     };
//     console.log(k)
// };

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// randArray(k);

// 4. Напишіть функцію raiseToDegree(a,b), яка повертає результат піднесення числа a до степеня b. Функція працює тільки з цілими числами. 
// Реалізувати інтерфейс введення чисел a, b з клавіатури.

// Sample Output:
// raiseToDegree(3, 4);  // 81

// let a = prompt("Please, enter the number", " ");
// let b = prompt("Please, enter the number", " ");
// function raiseToDegree(a,b){
//     if (a % 1 === 0 && b % 1 === 0) {
//         return a**b;
//       }
//       return 'Does NOT fit!';
//     }
    
// console.log(raiseToDegree(a,b));

// 5. Реалізуйте функцію – findMin(), яка повинна приймати довільну кількість цілих аргументів і повертати той, який має найменше значення. 
// Порада: для розв’язку можете скористатися спеціальним масивом arguments.
// Sample Output:
// findMin(12, 14, 4, -4, 0.2); // => -4

// let min = [];
// function findMin(a, b, ...manyMoreArgs){
//     for(let i = 0; i < arguments.length; i++) {
//         if (arguments[i] < min && i % 1 === 0) {
//           min = arguments[i];
//         };
//     };
//   return min;
// };
// console.log(findMin(12, 14, 4, -4, 0.2));

// 6. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// Sample Output:
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true

// let arr = [];
// function findUnique(arr) {
//     let arrClone = [];

//     for(let i = 0; i < arr.length; i++) {
//         if (arrClone.indexOf(arr[i]) > -1) {
//             return false;
//         } 
        
//         arrClone.push(arr[i]);
//     };

//     return true;
// }; 
// console.log(findUnique([1, 2, 3, 5, 11])) // true
// console.log(findUnique([1, 2, 3, 5, 1])) // false

// 7. Напишіть функцію, яка повертає останній елемент масиву. 
// Функція може приймати 2 параметра: 1-ий масив, 2-ий числовий параметр, що відповідає кількості 'х' 
// останніх елементів масиву, які треба вивести.

// Sample Output:
// console.log(lastElem([3, 4, 10, -5]));    
// let a = [3, 4, 10, -5];
// let b = 2;

// function lastElem(a, b) {
//     let acc = [];
//     let lastIndex = a.length - b;

//     for(let i = lastIndex; i < a.length; i++) {
//         acc.push(a[i]);
//     }

//     return acc;
// }
// console.log(lastElem(a, 3)); 
// console.log(lastElem(a, 2)); 

// 8. Напишіть функцію, яка приймає рядок як параметр і перетворює першу букву кожного слова рядка в верхній регістр.

// Input string: 'i love java script' 
// Output string: 'I Love Java Script'

// function titleCase(str) {
//     let splitStr = str.toLowerCase().split(' ');
//     for (let i = 0; i < splitStr.length; i++) {
//         splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
//     };   
//     return splitStr.join(' '); 
//  };
// console.log(titleCase("i love java script"));