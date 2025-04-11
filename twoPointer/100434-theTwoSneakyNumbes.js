/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
  if (nums.length < 2) return [];
  nums.sort((a, b) => a - b);
  let fast = 1;
  let slow = 0;
  let res = [];
  while (fast < nums.length || res.length < 2) {
    if (nums[fast] != nums[slow]) {
      slow = fast;
    } else {
      res.push(nums[fast]);
    }
    fast++;
  }
  return res;
};

let nums = [0, 3, 2, 1, 3, 2];
console.log(getSneakyNumbers(nums));
