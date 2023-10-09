var maxProfit = function (prices) {
  lowest = 0;
  highest = 1;
  maximumProfit = 0;
  totalProfit = 0;
  while (highest < prices.length) {
    if (prices[lowest] < prices[highest]) {
      currentProfit = prices[highest] - prices[lowest];
      totalProfit += currentProfit;
    }
    lowest = highest;
    highest++;
  }
  return totalProfit;
};
// prices = [7, 1, 2, 5, 7, 4];
prices = [1, 2, 3, 4, 1];
// prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
