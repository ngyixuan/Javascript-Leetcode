/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  function backtrack(start, path) {
    if (start >= s.length) {
      res.push([...path]);
      return;
    }

    for (let i = start; i < s.length; i++) {
      let substr = s.slice(start, i + 1);
      if (!isValid(substr)) continue;
      path.push(substr);
      backtrack(i + 1, path);
      path.pop();
    }
  }

  function isValid(str) {
    let reverseStr = str.split('').reverse().join('');
    return reverseStr === str;
  }

  backtrack(0, []);
  return res;
};
// @lc code=end
let s = 'aab';
console.log(partition(s));
