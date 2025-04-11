/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length == 1) return true;
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    let newRange = i + nums[i];
    cover = Math.max(cover, newRange);
    // console.log(jumpIndex);
    if (cover >= nums.length - 1) return true;
  }
  return false;
};

// let nums = [2, 0]; //true
// let nums = [0, 2, 3]; //false
// let nums = [1, 2, 3]; //true
// let nums = [3, 2, 1, 0, 4]; //false

console.log(canJump(nums));
