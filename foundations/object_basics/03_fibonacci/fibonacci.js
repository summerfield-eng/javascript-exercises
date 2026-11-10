const fibonacci = function (num) {
  let seqContainer = [1, 1];

  if (!Number.isInteger(num)) return "OOPS";
  if (num <= 0) return "OOPS";

  for (let i = 0; seqContainer.length <= num; i++) {
    seqContainer.push(seqContainer[i] + seqContainer[i + 1]);
  }

  return seqContainer[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
