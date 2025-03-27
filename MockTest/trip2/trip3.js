let MOD = 1e9 + 7;

function countWays(s) {
  let n = s.length;
  if (n == 0) return 0;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === '0' ? 0 : 1;
  for (let i = 2; i <= n; i++) {
    const oneDigit = parseInt(s.substring(i - 1, i));
    const twoDigit = parseInt(s.substring(i - 2, i));
    if (oneDigit >= 1 && oneDigit <= 9) {
      dp[i] = (dp[i] + dp[i - 1]) % MOD;
    }
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i] = (dp[i] + dp[i - 2]) % MOD;
    }
  }

  return dp[n];
}

let s = '120';
console.log(countWays(s));
