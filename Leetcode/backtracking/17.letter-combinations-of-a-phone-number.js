/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let res = [];
  let phone = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  if (digits === '') return [];
  function backtrack(path, start) {
    if (path.length == digits.length) {
      res.push(path);
      return;
    }
    let digit = Number(digits[start]);

    for (let char of phone[digit]) {
      backtrack(path + char, start + 1);
    }
  }

  backtrack('', 0);
  return res;
};
// @lc code=end
let digits = '23';
console.log(letterCombinations(digits));
