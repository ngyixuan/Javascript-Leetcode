/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let filterLetter = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reverseLetter = filterLetter.split("").reverse().join("");

  return reverseLetter == filterLetter;
};
// @lc code=end
let s = "A man, a plan, a canal: Panama";
console.log(isPalindrome(s));
