/* eslint-disable */
import "bootstrap";
import "./style.css";

let suits = [" ♦ ", " ♥ ", " ♠ ", " ♣"];
let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

window.onload = function() {
  generateCard();
};

function generateCard() {
  let suit = suits[getRandomInt(0, suits.length - 1)];
  let number = numbers[getRandomInt(0, numbers.length - 1)];
  console.log(suit, number);
  document.getElementById("suits-one").innerHTML = suit;
  document.getElementById("number-card").innerHTML = number;
  document.getElementById("suits-two").innerHTML = suit;

  if (suit.trim() == "♦" || suit.trim() == "♥") {
    document.getElementById("suits-two").style.color = "red";
    document.getElementById("suits-one").style.color = "red";
  } else {
    document.getElementById("suits-two").style.color = "black";
    document.getElementById("suits-one").style.color = "black";
  }
}

document
  .querySelector("#refresh-button")
  .addEventListener("click", generateCard);

setInterval(function() {
  generateCard();
}, 10000);

//

var form = document.getElementById("theForm"),
  card = document.getElementById("the-card");

form.addEventListener("submit", function(e) {
  // Don't forget to pass the 'e' parameter
  var width = form.elements["width"].value,
    height = form.elements["height"].value;

  card.style.width = width + "px";
  card.style.height = height + "px";

  e.preventDefault();
});
