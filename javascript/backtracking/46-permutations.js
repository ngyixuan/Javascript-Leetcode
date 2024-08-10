/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var res = [];
  var path = [];
  var used = new Array(nums.length).fill(false);

  var backtracking = function (used, path, nums) {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtracking(used, path, nums);
      path.pop();
      used[i] = false;
    }
  };

  backtracking(used, path, nums);
  return res;
};

let nums = [1];
console.log(permute(nums));
