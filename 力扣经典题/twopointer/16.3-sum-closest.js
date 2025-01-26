/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  if (nums.length < 3) return 0;
  let resDiff = Infinity;
  nums.sort((a, b) => a - b);

  function nSum(start, target) {
    let minDiff = Infinity;
    let left = start;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[left] + nums[right];
      if (Math.abs(minDiff) > Math.abs(target - sum)) {
        minDiff = target - sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }

    return target - minDiff; //得到最接近target的两数之和
  }

  for (let i = 0; i < nums.length - 2; i++) {
    let subSum = nSum(i + 1, target - nums[i]);
    let maxSum = nums[i] + subSum;

    if (Math.abs(resDiff) > Math.abs(target - maxSum)) {
      resDiff = target - maxSum;
    }
  }

  return target - resDiff;
};
// @lc code=end
let nums = [1, 1, 1, 0];
target = -100;
console.log(threeSumClosest(nums, target));
