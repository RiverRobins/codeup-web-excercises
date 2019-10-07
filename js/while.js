var i = 0;
num = 1;
while (i < 16) {
    num *= 2;
    console.log(num);
    i++;
}

//icecream
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

do {
    var sold = Math.floor(Math.random() * 5) + 1
    if (sold < allCones) {
        console.log("Sold: " + sold + " cones.");
        allCones -= sold;
    }
    else if (sold === allCones) {
        console.log("Sold: " + sold + " cones.");
        console.log("All cones sold");
        allCones = 0;
    }
    else {
        console.log("Cannot sell cones.");
    }
} while (allCones > 0);