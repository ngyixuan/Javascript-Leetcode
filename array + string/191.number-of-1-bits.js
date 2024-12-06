/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let binaryNum = n.toString(2);
  return binaryNum
    .toString()
    .split("")
    .filter((i) => i == "1").length;
};
// @lc code=end
let n = 128;
console.log(hammingWeight(n));
