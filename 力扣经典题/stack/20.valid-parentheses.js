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
  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      let popItem = stack.pop();

      if (map[popItem] != s[i]) {
        stack.push(popItem);
        stack.push(s[i]);
      }
    }
  }

  if (stack.length == 0) return true;
  return false;
};
// @lc code=end
let s = "()[]{}";
console.log(isValid(s));
