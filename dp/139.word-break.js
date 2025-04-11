/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      let item = s.slice(j, i);
      if (dp[j] && wordDict.includes(item)) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};
// @lc code=end

let s = 'leetcode';
let wordDict = ['leet', 'code'];
console.log(wordBreak(s, wordDict));
