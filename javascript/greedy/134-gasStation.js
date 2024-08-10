/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let sum = 0;
  let minCost = Infinity;
  for (let i = 0; i < cost.length; i++) {
    let rest = gas[i] - cost[i];
    sum += rest;
    if (sum < minCost) {
      minCost = sum;
    }
  }
  if (sum < 0) return -1; //如果gas的总和小于cost总和，那么无论从哪里出发，一定是跑不了一圈的
  if (minCost >= 0) return 0; //rest[i] = gas[i]-cost[i]为一天剩下的油，i从0开始计算累加到最后一站，如果累加没有出现负数，说明从0出发，油就没有断过，那么0就是起点。

  for (let i = gas.length - 1; i >= 0; i--) {
    let rest = gas[i] - cost[i];
    minCost += rest;
    if (minCost >= 0) {
      return i;
    }
  }

  return -1;
};

let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));
