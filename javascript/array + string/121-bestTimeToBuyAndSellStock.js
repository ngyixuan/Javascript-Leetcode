var maxProfit = function (prices) {
  let maxProfit = 0;
  let lowest = 0;
  let highest = 1;

  while (highest < prices.length) {
    profit = prices[highest] - prices[lowest];
    if (profit < 0) {
      lowest = highest;
    }

    maxProfit = Math.max(profit, maxProfit);
    highest++;
  }
  return maxProfit;
};
let prices = [2, 1, 2, 1, 0, 1, 2];
console.log(maxProfit(prices));
