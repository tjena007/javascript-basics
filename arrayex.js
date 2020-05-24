function printReverse(string) {
  console.log("print string in reverse");
  for (let index = string.length - 1; index > -1; index--) {
    const element = string[index];
    console.log(string[index]);
  }
}

printReverse([1, 2, 3, 4, "a"]);

function isUniform(string) {
  var a = [];
  console.log("check if string is uniform");
  for (let index = 1; index < string.length; index++) {
    if (!(string[index] === string[index - 1])) {
      console.log("false");
      a.push(string[index]);
      break;
    }
  }
  if (a.length === 0) {
    console.log("true");
  }
}

isUniform(["c"]);

function sumArray(numbers) {
  console.log("print sum of all numbers");
  var count = 0;
  for (let index = 0; index < numbers.length; index++) {
    count += numbers[index];
  }
  console.log(count);
}

sumArray([1, 2, 3, 4]);

function max(numbers) {
  console.log("Return maximum number in the array");
  var a = [null];
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > a[a.length - 1]) {
      a.push(numbers[index]);
    }
  }
  console.log(a[a.length - 1]);
}

max([-7, -2, -13, -4]);

function max1(numbers) {
  console.log("Return maximum number in the array");
  console.log(Math.max(...numbers));
}

max1([-7, -2, -13, -4]);
