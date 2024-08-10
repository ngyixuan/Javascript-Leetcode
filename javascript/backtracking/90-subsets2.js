/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  var res = [];
  var path = [];
  var start = 0;

  nums.sort((a, b) => a - b);

  var backtracking = function (start, path, nums) {
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      path.push(nums[i]);
      backtracking(i + 1, path, nums);
      path.pop();
    }
  };

  backtracking(start, path, nums);
  return res;
};

let nums = [3, 2, 2];
console.log(subsetsWithDup(nums));
