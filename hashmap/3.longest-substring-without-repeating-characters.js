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
  for (let right = 0; right < s.length; right++) {
    // charMap.get(s[right]) >= left 是为了确保left不会回退到更早的位置
    if (charMap.has(s[right]) && charMap.get(s[right]) >= left) {
      left = charMap.get(s[right]) + 1; //如果找到相似的，left向重复字符的右手边走一步
    }
    charMap.set(s[right], right);
    if (right - left + 1 > maxLen) {
      maxLen = right - left + 1; // 最后计算最长不重复字符串
    }
  }
  return maxLen;
};
// @lc code=end

let s = "abba";
console.log(lengthOfLongestSubstring(s));
