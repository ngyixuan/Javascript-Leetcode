/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let sentences = s
    .split(" ")
    .reverse()
    .filter((item) => item.length > 0);
  return sentences.join(" ");
};
// @lc code=end
let s = "the sky is blue";
console.log(reverseWords(s));
