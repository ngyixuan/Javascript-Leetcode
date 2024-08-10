/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  var res = [];
  var path = [];
  var used = new Array(nums.length).fill(false);

  nums.sort((a, b) => a - b);

  var backtracking = function (nums, path, used) {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtracking(nums, path, used);
      path.pop();
      used[i] = false;
    }
  };
  backtracking(nums, path, used);
  return res;
};

let nums = [1, 1, 2];
console.log(permuteUnique(nums));
