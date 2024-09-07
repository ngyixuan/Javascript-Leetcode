/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
  if (k > nums.length) return false;
  var sum = 0;
  for (let i of nums) sum += i;
  if (sum % k !== 0) return false;
  var target = sum / k;
  var used = new Array(nums.length).fill(false);

  var backtracking = function (k, bucket, nums, start, used, target) {
    if (k == 0) return true;
    if (bucket == target) return backtracking(k - 1, 0, nums, 0, used, target);

    for (let i = start; i < nums.length; i++) {
      if (used[i]) continue;
      if (nums[i] + bucket > target) continue;
      used[i] = true;
      bucket += nums[i];
      if (backtracking(k, bucket, nums, i + 1, used, target)) return true;
      used[i] = false;
      bucket -= nums[i];
    }

    return false;
  };

  return backtracking(k, 0, nums, 0, used, target);
};

let nums = [4, 3, 2, 3, 5, 2, 1];
let k = 4;
console.log(canPartitionKSubsets(nums, k));
