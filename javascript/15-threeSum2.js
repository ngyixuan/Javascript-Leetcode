/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  target = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    current = i;
    left = i + 1;
    right = nums.length - 1;
    if (nums[0] > 0) return res;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    while (left < right) {
      totalSum = nums[current] + nums[left] + nums[right];

      if (totalSum < 0) left++;
      else if (totalSum > 0) right--;
      else {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] == nums[left + 1]) left++;
        while (left < right && nums[right] == nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }

  return res;
};

nums = [-2, 0, 0, 2, 2];
console.log(threeSum(nums));
