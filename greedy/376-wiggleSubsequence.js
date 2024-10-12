/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length <= 1) return nums.length;
  let curDiff = 0;
  let preDiff = 0;
  let result = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    curDiff = nums[i + 1] - nums[i];
    if ((preDiff <= 0 && curDiff > 0) || (preDiff >= 0 && curDiff < 0)) {
      result++;
      preDiff = curDiff;
    }
  }
  return result;
};

nums = [1, 17, 5, 10, 13, 15, 10, 5, 16, 8];
console.log(wiggleMaxLength(nums));
