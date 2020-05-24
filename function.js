function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

var a = isEven(3);

function factorial(number) {
  if (number === 0) {
    return 1;
  } else {
    var a = number;
    while (number > 1) {
      a = a * (number - 1);
      number--;
    }
    return a;
  }
}

var b = factorial(4);

function kebabToSnake(str) {
  if (!str.includes("-")) {
    return str;
  } else {
    var newStr = str.replace("-", "_");
    return newStr;
  }
}

var c = kebabToSnake("ghdsagh-hgas");
