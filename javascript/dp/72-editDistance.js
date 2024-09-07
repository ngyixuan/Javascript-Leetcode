/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  var memo = [];
  for (let i = 0; i < word1.length; i++) {
    memo[i] = new Array(word2.length).fill(-1);
  }
  return dp(word1, word2, word1.length - 1, word2.length - 1, memo);
};

var dp = function (word1, word2, i, j, memo) {
  if (i == -1) return j + 1;
  if (j == -1) return i + 1;
  if (memo[i][j] != -1) return memo[i][j];
  if (word1[i] === word2[j]) memo[i][j] = dp(word1, word2, i - 1, j - 1, memo);
  else {
    memo[i][j] = Math.min(
      dp(word1, word2, i, j - 1, memo) + 1,
      Math.min(
        dp(word1, word2, i - 1, j, memo) + 1,
        dp(word1, word2, i - 1, j - 1, memo) + 1,
      ),
    );
  }

  return memo[i][j];
};

let word1 = "horse";
let word2 = "ros";
console.log(minDistance(word1, word2));
