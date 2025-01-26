/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  var memo = new Array(nums.length).fill(-1);
  var dp = function (nums, start) {
    if (start > nums.length - 1) return 0;
    if (memo[start != -1]) return memo[start];
    memo[start] = Math.max(
      dp(nums, start + 1),
      nums[start] + dp(nums, start + 2),
    );

    return memo[start];
  };
  return dp(nums, 0);
};

let nums = [1, 2, 3, 1];
z;
console.log(rob(nums));
