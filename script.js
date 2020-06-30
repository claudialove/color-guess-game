//hard coded color values
var colors = generateRandomColors(6)
//squares inside the container
var squares = document.querySelectorAll(".square");
//hard coding initial color to be "picked"
var pickedColor = pickColor();
//span in html to place picked color
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")

//set the picked color to display in title
colorDisplay.textContent = pickedColor;

//this loop applies our hard-coded colors evenly to the 6 squares
for (var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i]

    //add click listeners to squares
    squares[i].addEventListener("click", function () {
        //grab color of clicked square 
        var clickedColor = (this.style.backgroundColor);
        //compare color to picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    //loop through all squares 
    for (var i = 0; i < squares.length; i++) {
        //change color to match winning color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    //pick a  random number (corresponds to position in array)
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];

}

function generateRandomColors (num) {
    //make an array
    var arr = []
    //add num random colors to array
    for(var i = 0; i < num; i ++) {
        //get random color push into array
        arr.push(randomColor())

    }
    //return that array at the end
    return arr;
}

function randomColor() {
    //pick a red from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random() * 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}