/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let slow = 0;
  let fast = 0;

  slow = nums[slow];
  fast = nums[nums[fast]];

  while (true) {
    if (slow == fast) break;
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  fast = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};
// @lc code=end
let nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums));
