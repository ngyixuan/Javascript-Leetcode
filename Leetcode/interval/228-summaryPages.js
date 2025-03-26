/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let start = 0;

  let res = [];
  while (start < nums.length) {
    let end = start;
    while (nums[end] + 1 === nums[end + 1] && end + 1 < nums.length) {
      end++;
    }
    if (nums[end] > nums[start]) {
      res.push(nums[start] + "->" + nums[end]);
    } else {
      res.push(nums[start].toString());
    }
    start = end + 1;
  }
  return res;
};
let nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));
