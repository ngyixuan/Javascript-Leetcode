/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let numSet = new Set();
  let maxLen = 0;
  for (let num of nums) {
    numSet.add(num);
  }

  for (let num of numSet) {
    if (numSet.has(num + 1)) continue;
    let currMaxLen = 1;
    let tempCurr = num;
    while (numSet.has(tempCurr - 1)) {
      currMaxLen++;
      tempCurr--;
    }
    maxLen = Math.max(maxLen, currMaxLen);
  }
  return maxLen;
};
// @lc code=end
let nums = [];
console.log(longestConsecutive(nums));
