(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function (radius) {
            let area;

            // TODO: complete this method
            // hint: area = pi * radius^2

            return area = Math.PI * (this.radius * this.radius);

            // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
if (doRounding) {
    console.log("Circle info rounded to nearest whole number is: " + Math.round(this.getArea()));
} else{
    console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea(this.radius));
}
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

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
    console.log("Circle information rounded to the nearest whole number is:");
    circle.logInfo(true);
})();