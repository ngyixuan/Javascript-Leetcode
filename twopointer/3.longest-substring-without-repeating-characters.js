/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let charMap = new Map();
  let left = 0;
  let maxLen = 0;
  //   let maxStr = "";
  for (let right = 0; right < s.length; right++) {
    let currentChar = s[right];
    if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
      left = charMap.get(currentChar) + 1;
    }
    charMap.set(currentChar, right);
    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1;
      //   maxStr = s.slice(left, right + 1);
    }
  }

  return maxLen;
};

let str = "abcabcbb";
console.log(lengthOfLongestSubstring(str));

// @lc code=end
