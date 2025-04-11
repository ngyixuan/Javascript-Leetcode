/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  let result = [0];
  for (let i = 0; i < n; i++) {
    let size = result.length;
    for (let j = size - 1; j >= 0; j--) {
      result.push(result[j] | (1 << i));
    }
  }
  return result;
};
// @lc code=end
let n = 3;
console.log(grayCode(n));
