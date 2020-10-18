// 1. За допомогою методів об’єкта window створити:
// 	1) нове вікно розміром 300х300 пікселів.
// 	2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
// 	3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
// 	4) із затримкою 2 сек закрийте вікно.

// let newWindow = window.open("", "", "width=300, height=300");
// setTimeout(() => {
//     newWindow.resizeTo(500, 500);
// }, 2000);
// setTimeout(() => {
//     newWindow.moveTo(200, 200)
// }, 4000);
// setTimeout(() => {
//     newWindow.close();
// }, 6000);

// 2. Для заданої HTML-сторінки:
// <p id ='text'>I learning JavaScript events!</p> 
// <div>
// 	<button . . . . . >Change style!</button>
// </div>

// function changeCSS() {
//     text.style.color = "orange"
//     text.style.fontSize = "20px";
//     text.style.fontFamily="Comic Sans MS";
// }

// 3. Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
// 	1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
// 	2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
// 	3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
// 	4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.

// function setBackground(color) {
//     document.body.style.backgroundColor = color;
// }

// 4. Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.

// function deleteElem() {
//     let x = document.getElementById("nameSelect");
//     x.remove(x.selectedIndex);
// }
// clickBtn.addEventListener("click", deleteElem);

// 5. Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", 
// а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".

// function addItemIntoUl(text) {
//     let ul = document.getElementById("eventList");
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(text));
//     ul.appendChild(li);
// }

// let liveBtn = document.getElementById("liveBtn");
// liveBtn.addEventListener("mouseover", () => {
//     addItemIntoUl("Mouse on me!")
// });
// liveBtn.addEventListener("mouseout", () => {
//     addItemIntoUl("Mouse is not on me!")
// });
// liveBtn.addEventListener("click", () => {
//     addItemIntoUl("I was pressed!")
// });
