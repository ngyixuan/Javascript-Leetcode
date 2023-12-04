/**
 * @param {string} digits
 * @return {string[]}
 */

var letterDict = {
  1: "",
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};
var letterCombinations = function (digits) {
  let result = [];
  let path = [];
  const combinations = function (digits, index) {
    if (path.length == digits.length) {
      result.push([...path]);

      return;
    }
    let letters = letterDict[digits[index]];

    for (let i = 0; i < letters.length; i++) {
      path.push(letters[i]);

      combinations(digits, index + 1);

      path.pop();
    }
  };
  combinations(digits, 0);
  //   console.log(result);
  return result;
};

letterCombinations("23");
