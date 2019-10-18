(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");
    var planetsArray2 = planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     **/

    var brString = planetsArray.join("<br>");
    document.write(brString);

    /* BONUS:
    * Create another string that would display your planets in an undordered
    * list. You will need an opening AND closing <ul> tags around the entire
    * string, and <li> tags around each planet.
    */

    function makeUL(n) {
        var temp = [];
        for (var i = 0; i < n.length; i++) {
            temp.splice(temp[i], 0, "<li>");
            temp.splice(temp[i + 1], 0, n[i]);
            temp.splice(temp[i + 2], 0, "</li>");
        }
        temp.reverse();
        temp.unshift("<ul>");
        temp.push("</ul>");
        return temp.join(" ");
    }

    // console.log(makeUL(planetsArray2));

    document.write(makeUL(planetsArray2));

})();