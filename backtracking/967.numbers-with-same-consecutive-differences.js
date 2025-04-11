/*
 * @lc app=leetcode id=967 lang=javascript
 *
 * [967] Numbers With Same Consecutive Differences
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function (n, k) {
  let res = [];
  function backtrack(path) {
    if (path.length === n) {
      res.push(parseInt(path.join('')));
      return;
    }
    const last = path[path.length - 1];
    const nextDigits = new Set([last + k, last - k]);
    for (const digit of nextDigits) {
      if (digit >= 0 && digit <= 9) {
        path.push(digit);
        backtrack(path);
        path.pop();
      }
    }
  }
  for (let i = 1; i <= 9; i++) {
    backtrack([i]);
  }

  return res;
};
// @lc code=end
let n = 2;
let k = 1;
console.log(numsSameConsecDiff(n, k));
