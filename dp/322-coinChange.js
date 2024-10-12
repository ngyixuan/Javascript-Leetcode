/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let memo = new Array(amount + 1).fill(-666);

  var dp = function (coins, amount, memo) {
    if (amount === 0) return 0;
    if (amount < 0) return -1;
    if (memo[amount] != -666) return memo[amount];
    let res = Infinity;
    for (const coin of coins) {
      let subproblem = dp(coins, amount - coin, memo);
      if (subproblem === -1) continue;
      res = Math.min(subproblem + 1, res);
    }
    memo[amount] = res === Infinity ? -1 : res;
    return memo[amount];
  };
  return dp(coins, amount, memo);
};

let coins = [1, 2, 5];
let amount = 11;
console.log(coinChange(coins, amount));
