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

var isPalindrome = function (s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return s.substring(left + 1, right);
};

var longestPalindrome = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let palindrome1 = isPalindrome(s, i, i);
    let palindrome2 = isPalindrome(s, i, i + 1);

    res = res.length > palindrome1.length ? res : palindrome1;
    res = res.length > palindrome2.length ? res : palindrome2;
  }

  return res;
};

// @lc code=end

let s = "babad";

console.log(longestPalindrome(s));
