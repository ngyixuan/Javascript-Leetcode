/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let bracketMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];

  for (let t of s) {
    if (t == "(" || t == "[" || t == "{") {
      stack.push(t);
    } else {
      let popItem = stack.pop();
      if (bracketMap[popItem] !== t) {
        stack.push(popItem);
        stack.push(t);
      }
    }
  }

  return stack.length == 0 ? true : false;
};
// @lc code=end
let s = "(])]";
console.log(isValid(s));
