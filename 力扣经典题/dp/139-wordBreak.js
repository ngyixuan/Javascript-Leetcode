/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  var dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      const word = s.slice(j, i);
      console.log("i", i, "j", j, word);
      if (dp[j] == true && wordDict.includes(word)) {
        dp[i] = true;
        console.log("dp", dp);
        break;
      }
    }
  }

  return dp[s.length];
};

let s = "l";
let wordDict = ["l"];
console.log(wordBreak(s, wordDict));
