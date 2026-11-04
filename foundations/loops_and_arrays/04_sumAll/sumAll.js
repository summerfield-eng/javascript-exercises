const sumAll = function (param1, param2) {
  let start;
  let end;

  if (param1 < 0 || param2 < 0) return "ERROR";
  else if (!Number.isInteger(param1) || !Number.isInteger(param2))
    return "ERROR";

  if (param2 > param1) {
    start = param1;
    end = param2;
  } else {
    start = param2;
    end = param1;
  }

  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
