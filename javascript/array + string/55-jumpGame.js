/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxDistance = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxDistance) return false;
    maxDistance = Math.max(maxDistance, i + nums[i]);
    if (maxDistance >= nums.length - 1) return true;
  }

  return false;
};

let nums = [3, 2, 1, 0, 4];
console.log(canJump(nums));
