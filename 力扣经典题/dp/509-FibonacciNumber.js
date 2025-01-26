/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let memo = new Map();
  return dp(memo, n);
};

var dp = function (memo, n) {
  if (n == 0 || n == 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = dp(memo, n - 1) + dp(memo, n - 2);
  return memo[n];
};

console.log(fib(20));
