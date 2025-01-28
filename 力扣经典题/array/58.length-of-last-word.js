/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let res = s.trim().split(" ");
  return res[res.length - 1].length;
};
// @lc code=end
let s = "Hello World";
console.log(lengthOfLastWord(s));
