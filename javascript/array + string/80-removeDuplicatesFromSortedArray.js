/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  let slow = 0;
  let fast = 0;
  if (nums.length <= 2) return nums;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    } else if (slow < fast && count < 2) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
    count++;
    if (fast < nums.length && nums[fast] !== nums[fast - 1]) count = 0;
  }
  return slow;
};

nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
removeDuplicates(nums);
