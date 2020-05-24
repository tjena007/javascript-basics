var number = -10;
console.log("Problem 1");

for (var index = -10; index <= 19; index++) {
  console.log(index);
}

console.log("Problem 2");
for (var index = 10; index <= 40; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}

console.log("Problem 3");
for (var index = 300; index <= 333; index++) {
  if (index % 2 !== 0) {
    console.log(index);
  }
}

console.log("Problem 4");
for (var index = 5; index <= 50; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log(index);
  }
}
