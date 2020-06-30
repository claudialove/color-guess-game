var numSquares = 6;
//hard coded color values
var colors = generateRandomColors(numSquares)
//squares inside the container
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
//span in html to place picked color
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    //generate three new colors
    colors = generateRandomColors(numSquares);
    //update game title with the new colors
    pickedColor = pickColor();
    //update squares to display the three colors
    colorDisplay.textContent = pickedColor;
    //hide the other three squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function () {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    //generate three new colors
    colors = generateRandomColors(numSquares);
    //update game title with the new colors
    pickedColor = pickColor();
    //update squares to display the three colors
    colorDisplay.textContent = pickedColor;
    //hide the other three squares
    for (var i = 0; i < squares.length; i++) {
        (colors[i])
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});
resetButton.addEventListener("click", function () {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change the colors of the squares on the page
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = ""
})
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
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
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

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors to array
    for (var i = 0; i < num; i++) {
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