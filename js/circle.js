(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (n) {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return Math.PI * Math.pow(n, 2); // TODO: return the proper value
        },
        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            if (doRounding) {
                console.log("Area of a circle with radius: " + circle.radius + ", is: " + Math.round(this.getArea(this.radius)));
                // return Math.round(this.radius);
            }
            else {
                console.log("Area of a circle with radius: " + circle.radius + ", is: " + this.getArea(this.radius));
                // return this.radius;
            }
        }
    };

    // console.log(circle.radius);
    // console.log(circle.getArea(this.radius));
    // circle.logInfo(true);

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();