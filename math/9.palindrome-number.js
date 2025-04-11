/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let temp = x;
  let y = 0;
  while (temp > 0) {
    let lastnum = temp % 10;
    temp = Math.floor(temp / 10);
    y = y * 10 + lastnum;
  }
  return x === y;
};
// @lc code=end
let x = 10;
console.log(isPalindrome(x));
