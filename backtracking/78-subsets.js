/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  var res = [];
  var path = [];
  var start = 0;

  var backtracking = function (start, path, nums) {
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(i + 1, path, nums);
      path.pop();
    }
  };

  backtracking(start, path, nums);
  return res;
};
let nums = [];
console.log(subsets(nums));
