/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  let arithmetic = new Set(["+", "-", "*", "/"]);
  for (let t of tokens) {
    if (!arithmetic.has(t)) {
      stack.push(t);
    } else {
      if (stack.length < 2) continue;
      let num2 = parseInt(stack.pop());
      let num1 = parseInt(stack.pop());
      let totalNum = 0;
      switch (t) {
        case "+":
          totalNum = num1 + num2;
          break;
        case "-":
          totalNum = num1 - num2;
          break;
        case "*":
          totalNum = num1 * num2;
          break;
        case "/":
          totalNum = num1 / num2;
          break;
      }
      stack.push(totalNum);
    }
  }

  return parseInt(stack.pop());
};
// @lc code=end

let tokens = [18];
console.log(evalRPN(tokens));
