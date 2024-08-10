/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  var memo = new Array(amount + 1).fill(-Infinity);
  const dp = (coins, amount) => {
    if (amount == 0) return 0;
    if (amount < 0) return -1;

    if (memo[amount] != -Infinity) return memo[amount];

    let res = Infinity;
    for (const coin of coins) {
      let subproblem = dp(coins, amount - coin);
      if (subproblem === -1) continue;
      res = Math.min(res, subproblem + 1);
    }

    memo[amount] = res === Infinity ? -1 : res;
    return memo[amount];
  };

  return dp(coins, amount);
};

let coins = [1, 2, 5];
let amount = 100;
console.log(coinChange(coins, amount));
