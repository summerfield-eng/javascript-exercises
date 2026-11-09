const palindromes = function (str) {
  const lowerCase = str.toLowerCase();
  const noSpaces = lowerCase.replace(/[ ,.!]/g, "");
  const reversedStr = noSpaces.split("").toReversed().join("");

  return reversedStr === noSpaces;
};

// Do not edit below this line
module.exports = palindromes;
