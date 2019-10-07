//external js exercise
"use strict";

console.log("Hello from external JavaScript");
alert("Welcome to my website");
var favColor = prompt("what is your favorite color?");
if (favColor === "green") {
    alert("Great, " + favColor + " is my favorite color too.");
}
else {
    alert("Great, " + favColor + " is a good color(but green is still better).");
}

//previous exercise 1
// console.log(" ");
// console.log("Prev exercise:");
// console.log(" ");
// var a = 1;
// var b = a++;
// var c = ++a;
// console.log(a);
// console.log(b);
// console.log(c);
//
// var d = "hello";
// var e = false;
// console.log(d++);
// console.log(e++);
//
// var perplexed; // perplexed is undefined (no value is assigned)
// console.log(perplexed + 2);
//
// var price = 2.7;
// price.toFixed(2);
// // price = "2.7";
// // price.toFixed(2);
//
// console.log(isNaN(0));
// console.log(isNaN(1));
// console.log(isNaN(""));
// console.log(isNaN("string"));
// console.log(isNaN("0"));
// console.log(isNaN("1"));
// console.log(isNaN("3.145"));
// console.log(isNaN(Number.MAX_VALUE));
// console.log(isNaN(Infinity));
// console.log(isNaN("true"));
// console.log(isNaN(true));
// console.log(isNaN("false"));
// console.log(isNaN(false));
// // to illustrate why the isNaN() function is needed:
// console.log(NaN == NaN);
//
// console.log(!true);
// console.log(!false);
// console.log(!!true);
// console.log(!!false);
// console.log(!!0);
// console.log(!!-0);
// console.log(!!1);
// console.log(!!-1);
// console.log(!!0.1);
// console.log(!!"hello");
// console.log(!!"");
// console.log(!!'');
// console.log(!!"false");
// console.log(!!"0");

//previous exercise 2
// var sample = "Hello Codeup";
// console.log(sample.length);
// console.log(sample.toUpperCase());
//
// sample = sample + " Students";
// console.log(sample);
// sample = sample.replace("Students", "Class");
// console.log(sample);
//
// console.log(sample.indexOf("c"));
// console.log(sample.indexOf("C"));

//previous exercise 3
function addMovieCost(a, b, c) {
    var totalPaid = 0;
    var days = parseFloat(a) + parseFloat(b) + parseFloat(c);
    alert(totalPaid + (days * 3.00));
}
addMovieCost(prompt("How many days did you rent The Little Mermaid"), prompt("How many days did you rent Brother Bear"), prompt("How many days did you rent Hercules"));
// console.log(totalPaid);



function getPayment(googleHours, amazonHours, facebookHours) {
    return "Total payment: $" + ((googleHours * 400) + (amazonHours * 380) + (facebookHours * 350)).toString();
}
console.log(getPayment(6, 4, 10));



var scheduleNotConflict = confirm("Press OK if class does not conflict with current classes");
var classNotFull = confirm("Press OK if this class has room");
function canEnroll() {
    if (scheduleNotConflict === true && classNotFull === true) {
        return "Enrolled successfully";
    }
    else {
        return "Could not enroll";
    }
}
alert(canEnroll());

function offerProduct(exp, cur, premium, numOfItems) {
    if ((exp === cur && numOfItems > 2) || premium === true) {
        return "Offering product";
    }
    else {
        return "No offer"
    }
}
alert(offerProduct(prompt("When does the offer expire?"), prompt("What is the current date?"), confirm("Press OK if you are a premium user"), prompt("How many items did you buy?")));

//previous exercise 4
//
// var username = "codeup", password = "herebedragons";
//
// function checkPassword() {
//     if (password.search(username) === true || password.length > 5 || password.length < 20 || !(password = password.trim())) {
//         return password;
//     }
//     else {
//         return "Enter new password; password does not meet security requirements";
//     }
// }
// console.log(checkPassword());