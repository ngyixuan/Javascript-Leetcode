/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 1;
  let right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let value = mid * mid;
    if (value == x) return mid;
    if (value > x) {
      right = mid - 1;
    } else if (value < x) {
      left = mid + 1;
    }
  }
  return right;
};
// @lc code=end
let x = 8;
console.log(mySqrt(x));
