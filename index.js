document.querySelector("button").onclick=function(){

// Generate a random number for the first dice
const firstRandomNum = Math.floor(Math.random() * 6) + 1;
const firstDiceImage = './dice image/d' + firstRandomNum + '.png';
document.querySelectorAll("img")[0].setAttribute("src", firstDiceImage);

// Generate a random number for the second dice
const secondRandomNum = Math.floor(Math.random() * 6) + 1;
const secondDiceImage = './dice image/d' + secondRandomNum + '.png';
document.querySelectorAll("img")[1].setAttribute("src", secondDiceImage);

// Determine the winner and update the heading
if (firstRandomNum > secondRandomNum) {
    document.querySelector('h1').innerHTML = "The Winner is User 1";
} else if (firstRandomNum < secondRandomNum) {
    document.querySelector('h1').innerHTML = "The Winner is User 2";
} else {
    document.querySelector('h1').innerHTML = "It's a draw";
}
}