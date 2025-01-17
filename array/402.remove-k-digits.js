/*
 * @lc app=leetcode id=402 lang=javascript
 *
 * [402] Remove K Digits
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stack = [];
  for (let i = 0; i < num.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] > num[i] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  let result = stack.join("").replace(/^0+/, "");
  return result == "" ? "0" : result;
};
// @lc code=end
let num = "10",
  k = 2;
console.log(removeKdigits(num, k));
