/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let memo = new Array(n + 1).fill(0);
  var dp = function (n) {
    if (n <= 2) return n;
    if (memo[n]) return memo[n];
    memo[n] = dp(n - 1) + dp(n - 2);
    return memo[n];
  };

  return dp(n);
};

let n = 3;
console.log(climbStairs(n));
