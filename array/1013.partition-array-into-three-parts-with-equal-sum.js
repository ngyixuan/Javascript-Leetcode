/*
 * @lc app=leetcode id=1013 lang=javascript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  let totalSum = arr.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  const target = totalSum / 3;
  let currentSum = 0;
  let parts = 0;

  for (const num of arr) {
    currentSum += num;
    if (currentSum === target) {
      parts += 1;
      currentSum = 0;
    }
  }

  return parts >= 3;
};
// @lc code=end
let arr = [1, -1, 1, -1];
console.log(canThreePartsEqualSum(arr));
