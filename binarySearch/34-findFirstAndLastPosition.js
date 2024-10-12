/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [leftBound(nums, target), rightBound(nums, target)];
};
var leftBound = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  if (start >= nums.length || nums[start] !== target) return -1;
  return start;
};

var rightBound = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  if (end < 0 || nums[end] !== target) return -1;
  return end;
};
let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target));
