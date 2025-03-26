/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let memo = new Array(amount + 1).fill(-666);
  function dp(coins, amount) {
    if (amount == 0) {
      return 0;
    }
    if (amount < 0) {
      return -1;
    }
    if (memo[amount] !== -666) return memo[amount];
    let res = Infinity;
    for (let coin of coins) {
      let sub = dp(coins, amount - coin);
      if (sub === -1) continue;
      res = Math.min(res, sub + 1);
    }

    memo[amount] = res === Infinity ? -1 : res;
    return memo[amount];
  }

  return dp(coins, amount);
};
// @lc code=end

let coins = [1, 2, 5];
let amount = 11;
console.log(coinChange(coins, amount));
