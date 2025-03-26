/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  function isPalindrome(left, right) {
    while (s[left] == s[right] && left >= 0 && right < s.length) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    let isPalindrome1 = isPalindrome(i, i);
    let isPalindrome2 = isPalindrome(i, i + 1);
    res = res.length > isPalindrome1.length ? res : isPalindrome1;
    res = res.length > isPalindrome2.length ? res : isPalindrome2;
  }

  return res;
};
// @lc code=end
let s = "bb";
console.log(longestPalindrome(s));
