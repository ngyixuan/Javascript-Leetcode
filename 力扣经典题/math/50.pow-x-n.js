/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  function calcpower(x, n) {
    if (x == 0) return 0;
    if (n == 0) return 1;

    let res = calcpower(x, Math.floor(n / 2));
    res = res * res;
    if (n % 2 == 0) {
      return res;
    } else {
      return res * x;
    }
  }
  let res = calcpower(x, Math.abs(n));
  if (n >= 0) {
    return res;
  } else {
    return 1 / res;
  }
};
// @lc code=end
let x = 2.0,
  n = 2;
console.log(myPow(x, n));
