"use strict";

for (var i = 1, n = prompt("Enter number to see multiplications:"); i < 11; i++) {
    console.log(n * i);
}

for (var i = 0, n = 0; i < 10; i++) {
    n = Math.floor(Math.random() * 200) + 20;
    if (n % 2 === 1) {
        console.log(n + " is odd.");
    }
    else {
        console.log(n + " is even.");
    }
}

for (var i = 1; i < 10; i++) {
    var length = 0;
    var number = i.toString();
    var temp = "";
    while (length < i) {
        temp = temp + number;
        length++;
    }
    console.log(temp);
}

for (i = 100; i > 0; i = i - 5) {
    console.log(i);
}