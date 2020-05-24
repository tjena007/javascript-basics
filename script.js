// var firstName = prompt("Whats your first name?");
// var lastName = prompt("Whats your last name?");
// var age = prompt("what's your age?");
// console.log("Your name is " + firstName + " " + lastName);
// console.log("Your are " + age + " years old");

var age = parseInt(prompt("whats your age?"));
console.log(Math.sqrt(age));
sq = Math.sqrt(age);

// alert(age + " years is roughly " + age * 365 + " days");

// equal to : == ( type coercion)
// NaN --> not a number
// equal value and type : ===
//tuthy and falsey values
// null== undefined
if (age < 0) {
  console.log("Error");
}
if (age === 21) {
  console.log("HBD");
}
if (age < 0) {
  console.log("Error");
}
if (age % 2 !== 0) {
  console.log("Odd");
}
if (Number.isInteger(sq)) {
  console.log("perfect square");
}
