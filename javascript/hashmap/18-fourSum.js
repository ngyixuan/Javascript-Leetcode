/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];
  nums.sort((a, b) => a - b);

  if (nums.length < 4) return res;
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        totalSum = nums[i] + nums[j] + nums[left] + nums[right];
        if (totalSum > target) right--;
        else if (totalSum < target) left++;
        else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] == nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] == nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        }
      }
    }
  }
  return res;
};

// nums = [1, 0, -1, 0, -2, 2];
// target = 0;
// nums = [2, 2, 2, 2, 2];
// target = 8;
nums = [-2, -1, -1, 1, 1, 2, 2];
target = 0;
console.log(fourSum(nums, target));
