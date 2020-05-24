var i = 0;
while (i < 10) {
  var guess = prompt("Are we there yet?");
  if (guess.search("yes") || guess.search("yeah")) {
    alert("Yes, we finally made it!");
    break;
  } else {
    i--;
  }
}

var str = "asidslfdosfvdseasykkolgu";
// console.log(str);
for (var index = 2; index < str.length; index += 3) {
  console.log(str[index]);
}
