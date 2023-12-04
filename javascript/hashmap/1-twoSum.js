/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  numsMap = new Map();
  let arr = [];
  for (let index = 0; index < nums.length; index++) {
    matchNum = target - nums[index];
    if (!numsMap.has(matchNum)) {
      numsMap.set(nums[index], index);
    } else {
      arr.push(numsMap.get(matchNum));
      arr.push(index);
    }
  }

  return arr;
};

nums = [-3, 4, 3, 90];
target = 0;
console.log(twoSum(nums, target));
