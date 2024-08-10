/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slow, fast;
  if (nums.length == 0) return 0;
  slow = 0;
  fast = 1;
  for (let i = fast; i < nums.length; i++) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
};
