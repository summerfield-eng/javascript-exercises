const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
};

const multiply = function (arr) {
  let acc = arr[0];

  for (let i = 1; i < arr.length; i++) {
    acc *= arr[i];
  }

  return acc;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  if (num === 0) return 1;

  let arrs = [];

  for (let i = 1; i <= num; i++) {
    arrs.push(i);
  }

  return multiply(arrs);
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
