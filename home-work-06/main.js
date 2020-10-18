//                             ***Task 1***

// 1.Потрібно змінити вміст елемента із First на Last. Доступіться до елемента div хоча б 2 способами.

// document.getElementById("test").innerHTML = "Last";
// document.getElementsByTagName("div")[0].innerHTML = "Last";

//                             ***Task 2***

// 2. На сторінці є елемент зображення:
// <body>
// <img class="image" src="dog.jpg">
// </body>
// Потрібно змінити зображення dog.jpg на cat.jpg.
// Виведіть в модальному вікні вміст тегу img з новим зображенням.

// let el = document.getElementsByTagName("img")[0];
// el.src= "cat.jpg";
// alert(el.outerHTML);

//                             ***Task 3***

// На вказаній HTML-сторінці необхідно отримати всі елементи всередині тега div по селектору (використати метод document.querySelectorAll).
// І вивести їх вміст із вказанням номеру абзацу в такому форматі:
// Selector text 0: First paragraph
// Selector text 1: Second paragraph
// Selector text 2: Third paragraph

// let el = document.querySelectorAll("#text p");
// for (let i = 0; i < el.length; i++) {
//     console.log("Selector text " + i + ": " + el[i].innerHTML);
// }

//                             ***Task 4***

// 4. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
//  У модальному вікні необхідно послідовно вивести вміст:
// 	1) першого елемента списку
// 	2) останнього елемента списку
// 	3) другого елемента списку
// 	4) четвертого елемента списку
// 	5) третього елемента списку
// Зробіть завдання 2 різними способами.	
// Приклад:
// 1
// 2
// 3
// 4
// 5
// Результат виводу: 1, 5, 2, 4, 3

// let parentEl = document.getElementById("list");
// let firstEl = parentEl.children[0].innerHTML;
// let lastEl = parentEl.children[4].innerHTML;
// let secondEl = parentEl.children[1].innerHTML;
// let fourthEl = parentEl.children[3].innerHTML;
// let thirdEl = parentEl.children[2].innerHTML;


// alert(firstEl);
// alert(lastEl);
// alert(secondEl);
// alert(fourthEl);
// alert(thirdEl);

//                             ***Task 5***

// document.getElementsByTagName("h1")[0].style.background = "lightgreen";
// document.getElementById("myDiv").children[0].style.fontWeight = "800";
// document.getElementById("myDiv").children[1].style.color = "red";
// document.getElementById("myDiv").children[2].style.textDecoration = "underline";
// document.getElementById("myDiv").children[3].style.fontStyle = "italic";
// document.getElementById("myList").style.listStyle = "none";
// document.getElementById("myList").style.display = "flex";
// document.getElementsByTagName("span")[0].style.display = "none";

//                             ***Task 6***

// let message1 = prompt("Enter first message", "");
// let message2 = prompt("Enter second message", "");
// let inp1 = document.getElementById("input1");
// let inp2 = document.getElementById("input2");
// inp1.value = message1;
// inp2.value = message2;

// let inp1Value = inp1.value;
// let inp2Value = inp2.value;
// inp1.value = inp2Value;
// inp2.value = inp1Value;

//                             ***Task 7***

// document.body.innerHTML=`<main class="mainClass check item"> 	
// <div id="myDiv">
// <p>First paragraph</p>           
// </div>
// </main> `;