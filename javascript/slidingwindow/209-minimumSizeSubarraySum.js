/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let minLength = nums.length + 1;
  let sum = 0;
  let left = 0;
  let totalSum = nums.reduce((a, b) => a + b, 0);
  if (totalSum < target) return 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLength = Math.min(right - left + 1, minLength);
      sum -= nums[left];
      left++;
    }
  }
  return minLength;
};

let target = 11,
  nums = [1, 1, 1, 1, 1, 1, 1, 1];
console.log(minSubArrayLen(target, nums));
