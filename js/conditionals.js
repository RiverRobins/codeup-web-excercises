"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

if (confirm("Press OK if you would like to enter a number") === true) {
    var n = parseInt(prompt("Enter a number:"));
    if (n != NaN) {
        if (n % 2 === 0) {
            alert("Number is even");
        }
        else  {
            alert("Number is odd");
        }
        alert("Number " + n + (" plus 100 is ") + (n + 100));
        if (n > 0) {
            alert("Number is positive");
        }
        else if (n === 0) {
            alert("Number is zero");
        }
        else {
            alert("Number is negative");
        }
    }
}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(n) {
    if (n === "blue") {
        return "blue is the color of the ocean";
    }
    else if (n === "red") {
        return "red be the color of the ocean but after a shark attack";
    }
    else if (n === "green") {
        return "green is the color of the ocean but after a plankton bloom";
    }
    else if (n === "yellow") {
        return "yellow is the color of everyone's cup right now";
    }
    else if (n === "white") {
        return "white is the color sun. If you don't believe me, just look";
    }
    else if (n === "black") {
        return "black is the color of space."
    }
    else {
        return n.toString() + " is not a color I has the energy to include.";
    }
}
console.log(analyzeColor("red"));
console.log(analyzeColor("green"));
console.log(analyzeColor("black"));
console.log(analyzeColor("purple"));
console.log(analyzeColor("white"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

//logs random color 5 times
for (var i = 0; i < 5; i++) {
    console.log(analyzeColor(randomColor));
    randomColor = colors[Math.floor(Math.random() * colors.length)];
}

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColorAlt(n) {
    switch (n) {
        case "blue":
            return "blue is the color of the ocean";
            break;
        case "red":
            return "red be the color of the ocean but after a shark attack";
            break;
        case "green":
            return "green is the color of the ocean but after a plankton bloom";
            break;
        case "yellow":
            return "yellow is the color of everyone's cup right now";
            break;
        case "white":
            return "white is the color sun. If you don't believe me, just look";
            break;
        case "black":
            return "black is the color of space.";
            break;
        default: {
            return n.toString() + " is not a color I has the energy to include.";
        }
    }
}
console.log(analyzeColorAlt("red"));
console.log(analyzeColorAlt("green"));
console.log(analyzeColorAlt("black"));
console.log(analyzeColorAlt("purple"));
console.log(analyzeColorAlt("white"));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

analyzeColor(prompt("Enter a color:"));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(lucky, tot) {
    var discount = 0.0;
    switch (lucky) {
        case 1: {
            discount = 0.1;
            break;
        }
        case 2: {
            discount = 0.25;
            break;
        }
        case 3: {
            discount = 0.35;
            break;
        }
        case 4: {
            discount += 0.5;
            break;
        }
        case 5: {
            discount = 1;
            break;
        }
        default: {
            break;
        }
    }
    return (tot) - (tot * discount);
}

console.log(calculateTotal(0, 20));
console.log(calculateTotal(1, 20));
console.log(calculateTotal(2, 20));
console.log(calculateTotal(3, 20));
console.log(calculateTotal(4, 20));
console.log(calculateTotal(5, 20));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

alert(calculateTotal(luckyNumber, prompt("What was your total?")));