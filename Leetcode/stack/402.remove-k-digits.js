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
    let item = parseInt(num[i]);

    while (stack.length > 0 && stack[stack.length - 1] > item && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(item);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  let res = stack.join("").replace(/^0+/, "");
  return res === "" ? "0" : res;
};
// @lc code=end
let num = "9",
  k = 1;

console.log(removeKdigits(num, k));
