var skip = 0;

while (skip % 2 === 0 || skip < 0) {
    skip = parseInt(prompt("Enter an odd number"));
}

for (var i = 1; i < 50; ++i, ++i) {
    if (i === skip) {
        console.log("skipping " + skip + " because it's a bad number");
    }
    else {
        console.log(i);
    }
}