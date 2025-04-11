/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  let charMap = new Map();
  if (s.length < k) return 0;
  for (let i = 0; i < s.length; i++) {
    charMap.set(s[i], (charMap.get(s[i]) || 0) + 1);
  }

  for (let char of charMap.keys()) {
    if (charMap.get(char) < k) {
      let count = 0;
      let newStr = s.split(char);
      for (let t of newStr) {
        count = Math.max(count, longestSubstring(t, k));
      }
      return count;
    }
  }
  return s.length;
};
// @lc code=end
let s = "ababbcddeeef",
  k = 2;

console.log(longestSubstring(s, k));
