/*
 * @lc app=leetcode id=392 lang=javascript
 *
 * [392] Is Subsequence
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let left = 0;
  for (let right = 0; right < t.length; right++) {
    if (left == s.length) return true;
    if (s[left] == t[right]) left++;
  }
  if (left < s.length) return false;
  return true;
};
// @lc code=end
let s = "axc",
  t = "ahbgdc";

console.log(isSubsequence(s, t));
