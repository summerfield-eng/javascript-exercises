const removeFromArray = function (arr, ...val) {
  return Array.from(new Set(arr).difference(new Set(val)));
};

// Do not edit below this line
module.exports = removeFromArray;
