/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  resultArr = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          sort;
          resultArr.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return resultArr;
};

nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
