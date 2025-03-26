/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  for (let col = 0; col < strs[0].length; col++) {
    for (let row = 1; row < strs.length; row++) {
      let prev = strs[row - 1];
      let curr = strs[row];
      if (prev[col] !== curr[col]) {
        return curr.substring(0, col);
      }
    }
  }
  return strs[0];
};
// @lc code=end
let strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));
