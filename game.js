// frist dice
var random1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+random1+".png");
// secound dice
var random2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+random2+".png");
// winer
if(random1 > random2){ document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!"; }
else if (random1 < random2) { document.querySelector("h1").innerHTML = "🚩 Play 2 Wins!"; }
else {    document.querySelector("h1").innerHTML = "🚩 Draw!"; }

// var imgselect2 = "images/dice"+random2+".png";
// var imgselect1 = "images/dice"+random1+".png";