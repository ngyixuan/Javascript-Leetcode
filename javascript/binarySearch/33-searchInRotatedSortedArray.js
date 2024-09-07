/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  let offset = start;
  start = 0;
  end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midChange = (mid + offset) % nums.length;
    console.log(start, end, mid);
    let realMid = nums[midChange];
    if (realMid > target) {
      end = mid - 1;
    } else if (realMid < target) {
      start = mid + 1;
    } else {
      return midChange;
    }
  }
  return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(search(nums, target));
