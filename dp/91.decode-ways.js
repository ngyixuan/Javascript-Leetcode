/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s.startsWith('0')) return 0;
  let n = s.length;
  let dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1];
    }
    const twoDigits = parseInt(s.substring(i - 2, i));

    if (twoDigits >= 10 && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};
// @lc code=end
let s = '10';
console.log(numDecodings(s));
