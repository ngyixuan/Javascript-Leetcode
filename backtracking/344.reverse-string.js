/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  function backtrack(left, right) {
    if (left >= right) {
      return;
    }
    [s[left], s[right]] = [s[right], s[left]];
    backtrack(left + 1, right - 1);
  }

  backtrack(0, s.length - 1);
  return s;
};

// @lc code=end
let s = ["h", "e", "l", "l", "o"];
console.log(reverseString(s));
