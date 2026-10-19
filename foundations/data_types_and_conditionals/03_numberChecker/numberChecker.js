function numberChecker(number) {
  if (number === 10) return true;
  if (number === 9) return false;
  if (number === 6) return false;
  return number >= 10 ? true : false;
}

// Do not edit below this line
module.exports = numberChecker;
