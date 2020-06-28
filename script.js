//hard coded color values
var colors = [
    "rgb(255, 0, 0)",  
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
//squares inside the container
var squares = document.querySelectorAll(".square");
//hard coding initial color to be "picked"
var pickedColor = colors[3];
//span in html to place picked color
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i ++) {
    squares[i].style.backgroundColor = colors[i]
}