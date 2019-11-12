"use strict";

/*********************************************
 *              EXPONENTIATION
 ******************************************** */
// TO DO: We know that the old JS syntax uses this:
//     >> Math.pow(a,b)
//     Using the ES6 exponentiation Operator, refactor the following:


// var x = 4 ** 5; //Math.pow(4,5);
// console.log(x);
//
// let random = Math.floor(Math.random() * (Math.pow(2,3)));
// console.log(random);


/*********************************************
 *              let and const
 ******************************************** */
// random = Math.floor(Math.random() * x);
// console.log(random);

// TO DO: Refactor everything above to use es6 variable types.
//     What happens when you change the 'random' variable to a const?
//
// Why does this happen and how do we fix this behavior?
//
// TO DO TOGETHER: change the var keyword to const. What do you see in
// the console? Now change it to let and try again.

// let sayHello = "Hello World!";
//
// sayHello = "Hello Deimos!";
//
// console.log(sayHello);


// TO DO: change var i into let. What are your results?

// var numbers = [1,2,3,4,5];
//
// for(var i = 0; i < numbers.length; i++){
//     console.log(i);
// }
// console.log(i);

/*********************************************
 *              for ... of
 ******************************************** */
    // TO DO TOGETHER: using a for...of loop, console log each element in
    // the array.
// const myArray = ["it", "is", "really", "cold", "outside"];
//
// for(let element of myArray) {
//     console.log(element);
// }

//TO DO: using a for ... of loop, iterate over the array of instructors. If
// the instructor is Sophie or David, console log the name.

const instructors = [
    'Daniel',
    'Vivian',
    'Sophie',
    'David',
    'Justin',
    'Fer',
];

// for(let item of instructors) {
//     if (item === "Sophie" || item === "David") {
//         console.log(item);
//     }
// }
//
// const arr = [1,2,3,4,5,6,7,8];
// function showEvens(n) {
//     let temp = [];
//     for (let item of n) {
//         if (item % 2 === 0) {
//             temp.push(item);
//         }
//     }
//     // for (let i = 0; i < n.length; i++) {
//     //     if (n[i] % 2 === 0) {
//     //         temp.push(n[i]);
//     //     }
//     // }
//     return temp
// }
//
// console.log(showEvens(arr));


/*********************************************
 *              Arrow Functions
 ******************************************** */

// TO DO TOGETHER: refactor this into an arrow function. Be as concise as
// possible.

function add(a,b){
    return a + b;
}

const addF = (a, b) => a + b;



// TO DO TOGETHER: refactor the following so that variable 'greeting' has a
// default value of 'Good Morning' and 'name' has the value of 'Deimos.
//
//      Check your work.

const myGreeting = (greeting = "Good",name = "morning") => {
    return `${greeting},${name}`;
};
//
// console.log(myGreeting());
// console.log(myGreeting("Hello", "Sophie"));

/*********************************************
 *              Objects
 ******************************************** */

// TO DO: Refactor the Object below to use shorthand property assignment

// const mydog = "Spike";
// const cat = "Tom";
// const mouse = "Jerry";
//
// const pals = {
//     dog: mydog,
//     cat,
//     mouse
// };
//
//
// let {dog,cat,mouse} = pals;

// TO DO TOGETHER: Use Object Destructuring to refactor

// const make = 'nissan';
// const model= 'rogue';
// const color = 'white';
//
// const myCar = {
//     make,
//     model,
//     color
// };
//
// const carInfo = (car) => {
//     let make = car.make;
//     let model = car.model;
// };

// carInfo(myCar);

//BONUS: Array Destructuring.

const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
const [p, o, i, u, y, t] = myArr;
console.log(t);