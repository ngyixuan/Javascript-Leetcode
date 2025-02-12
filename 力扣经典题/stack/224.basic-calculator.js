/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let operationStack = [];
  let result = 0;
  let sign = 1;
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    let item = s[i];
    if (!isNaN(parseInt(item))) {
      num = num * 10 + parseInt(item);
    } else if (item === "+" || item === "-") {
      result += num * sign;
      sign = item === "+" ? 1 : -1;
      num = 0;
    } else if (item === "(") {
      operationStack.push(result);
      operationStack.push(sign);
      sign = 1;
      result = 0;
    } else if (item === ")") {
      result += num * sign;

      result *= operationStack.pop();
      result += operationStack.pop();
      num = 0;
    }
  }

  return result + num * sign;
};
// @lc code=end
let s = "(1+(4+5+2)-3)+(6+8)";
console.log(calculate(s));
