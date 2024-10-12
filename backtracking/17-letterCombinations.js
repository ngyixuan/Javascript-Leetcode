/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let numberMap = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  let path = [];
  let result = [];
  let k = digits.length;
  if (!k) return result;
  backtracking(digits, k, 0);
  return result;

  function backtracking(digits, k, startIndex) {
    if (path.length == k) {
      result.push(path.join(""));
      return;
    }
    for (let i = 0; i < numberMap[digits[startIndex]].length; i++) {
      path.push(numberMap[digits[startIndex]][i]);
      backtracking(digits, k, startIndex + 1);
      path.pop();
    }
  }
};
console.log(letterCombinations("2"));
