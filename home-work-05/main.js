// 1. Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.

// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development"
// };
// function propsCount(currentObject) {
//     return Object.keys(currentObject).length;
// };
// console.log(propsCount(mentor));

// 2. Створіть довільний об’єкт, який має 5 полів.Необхідно написати функцію showProps(obj),
//     яка приймає даний об’єкт і виводить список його властивостей записаних в масив.
// Виведіть також масив значень властивостей об’єкта.

// let obj = {
//     name: "Peter",
//     lastName: "Johnson",
//     age: 28,
//     gender: "male",
//     nationality: "Ukrainian"
// };
// let person = howProps;
// person();
// function howProps() {
//     console.log(Object.keys(obj));
//     console.log(Object.values(obj));
// }; 

// 3. Створіть клас Person, в якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить ім’я і прізвище особи.
// Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year(рік вступу до університету).
// В класі Student необхідно перевизначити метод showFullName(middleName), щоб виводилося не лише ім’я, прізвище, але і по - батькові(middleName) студента.
// Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента(від 1 до 6).
// Значення курсу визначатиметься як різниця поточного року(визначити самостійно) і року вступу до ВУЗу year.

// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     };

//     showFullName() {
//         console.log(this.name + " " + this.surname);
//     };
// };

// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname);
//         this.year = year;
//     };

//     showFullName(middleName) {
//         return this.name + " " + this.surname + " " + middleName;
//     };

//     showCourse() {
//         let currentDate = new Date();
//         let currentYear = currentDate.getFullYear();
//         let currentCourseRaw = currentYear - this.year;

//         return currentCourseRaw >= 0 ? currentCourseRaw : 0;
//     }

// }

// let stud1 = new Student("Petro", "Petrenko", 2015);
// console.log(stud1.showFullName("Petrovych"));
// console.log("Current course: " + stud1.showCourse());

//  4. Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
// 1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
// 2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
// 3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
// 4) Вивести значення зарплати з новим experience.
// 5) Створити кілька екземплярів класу (працівників) з різними зарплатами. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value ………..

// class Worker {
//     #experience = 1.2;

//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }

//     showSalary() {
//         console.log(`${this.fullName}: ${this.salary}`);
//     }

//     showSalaryWithExperience() {
//         console.log(`${this.fullName} salary: ${this.salaryWithExperience}`);
//     }

//     get salaryWithExperience() {
//         return this.salary * this.#experience;
//     }

//     get salary() {
//         return this.dayRate * this.workingDays;
//     }

//     get showExp() {
//         return this.#experience;
//     }

//     set setExp(value) {
//         this.#experience = value;
//     }
// };

// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();

// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// worker3.showSalary();
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();

// let workers = [worker1, worker2, worker3];
// console.log('Sorted salary');
// workers.sort((w1, w2) => w1.salaryWithExperience - w2.salaryWithExperience);
// workers.forEach((worker) => {
//     worker.showSalaryWithExperience();
// });

// 5. Створіть батьківський клас GeometricFigure, який має порожній метод для визначення площі getArea() та метод toString() для виведення назви класу.
// Створіть 3 класи нащадки Triangle, Square і Circle, які наслідуються від класу GeometricFigure. 
// Кожен з дочірніх класів має свою реалізацію методу getArea(), для визначення площі фігури. 
// В конструкторах дочірніх класів передбачити властивості необхідні для визначення площі фігури, наприклад для кола - радіус r.
// Створіть зовнішню функцію handleFigures(figures), яка прийматиме масив об’єктів дочірніх класів figures, перевірятиме чи об’єкт належить батьківському класу з урахуванням наслідування, 
// виводитиме назву створеного об’єкту відповідної фігури, розраховану площу фігури та сумарну площу всіх фігур. Для реалізації функції можете використати метод reduce().

// class GeometricFigure {
//     getArea() {
//         return 0;
//     }

//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }
// class Triangle extends GeometricFigure {
//     constructor(base, height) {
//         super();
//         this.base = base;
//         this.height = height;
//     }

//     getArea() {
//         return (this.base * this.height) / 2
//     }

//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }
// class Square extends GeometricFigure {
//     constructor(side) {
//         super();
//         this.side = side;
//     }
//     getArea() {
//         return this.side * this.side;
//     }

//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }
// class Circle extends GeometricFigure {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.radius * this.radius;
//     }

//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }

// function handleFigures(figures) {
//     return figures.reduce((acc, figure) => {
//         let figureArea = figure.getArea();

//         console.log(`Geometric figure: ${figure} ${figureArea}`);

//         return acc + figureArea;
//     }, 0);
// }

// const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
// console.log(handleFigures(figures));
