




function myFunction() {
    var x = document.getElementById("myRange").value;
    document.getElementById("demo").innerHTML = x;
    console.log(x)
}

drawPyramid(parseInt(6));



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // TODO 2
    // delete the "under construction" element, ie the <div id="notice">
    var construction = document.getElementById("construction");
    construction.innerHTML = "";



    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += "."; // QUIZ: what happens if we use a space (" ") instead of a period?
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }


        var domRow = document.createElement("p");
        domRow.append(rowStr);

        construction.append(domRow)
        // you can delete this now
        console.log(rowStr)



        // create an element whose inner text is rowStr,
        // and insert it as a child of the container <div id="pyramid">

    }
}
