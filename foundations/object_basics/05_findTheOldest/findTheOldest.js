const findTheOldest = function (arr) {
  let today = new Date().getFullYear();
  let sortedArr = arr.sort(
    (a, b) =>
      (a.yearOfDeath ?? today) -
      a.yearOfBirth -
      ((b.yearOfDeath ?? today) - b.yearOfBirth),
  );

  return sortedArr[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
