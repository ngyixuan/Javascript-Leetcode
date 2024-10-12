/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  var binarySearch = function (start, end) {
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid + 1] > nums[mid]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    return start;
  };
  let ans = binarySearch(start, end);
  return ans;
};

let nums = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(nums));
