/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let sum = 0;
  let minSum = 0;
  let index = -1;
  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    if (sum < minSum) {
      minSum = sum;
      index = i;
    }
  }
  if (sum < 0) return -1;
  return index + 1;
};
let gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];
console.log(canCompleteCircuit(gas, cost));
