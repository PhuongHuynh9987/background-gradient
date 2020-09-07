var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("gradient");
var rColor = document.querySelector(".rColor");

function setGradient() {
    body.style.background = 
            "linear-gradient(to right, "
            + color1.value + ","
            + color2.value + ")";
}

function setRandomGradient() {
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);

    body.style.background =           
            "linear-gradient(to right, #"
            + randomColor1 + ", #"
            + randomColor2 + ")";
} 

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

rColor.addEventListener("click", setRandomGradient);