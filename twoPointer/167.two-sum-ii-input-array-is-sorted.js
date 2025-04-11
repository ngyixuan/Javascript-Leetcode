/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  numbers.sort((a, b) => a - b);
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
};
// @lc code=end
let numbers = [2, 7, 11, 15],
  target = 9;
console.log(twoSum(numbers, target));
