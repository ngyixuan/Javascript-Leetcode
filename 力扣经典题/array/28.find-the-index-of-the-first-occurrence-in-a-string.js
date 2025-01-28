/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let subItem = haystack.slice(i, i + needle.length);
    if (subItem == needle) {
      return i;
    }
  }
  return -1;
};
// @lc code=end
let haystack = "sadbutsad",
  needle = "sad";
console.log(strStr(haystack, needle));
