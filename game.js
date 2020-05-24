var num = 7;
var guess = Number(prompt("Guess a number!"));

if (guess < num) {
  alert("Too low.try again");
} else if (guess > num) {
  alert("Too high.try again");
} else {
  alert("Bingo");
}
