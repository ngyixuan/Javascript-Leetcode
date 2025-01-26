/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let p = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[p] = nums1[i];
      i--;
    } else {
      nums1[p] = nums2[j];
      j--;
    }
    p--;
  }
  while (j >= 0) {
    nums1[p] = nums2[j];
    j--;
    p--;
  }
};
// @lc code=end
let nums1 = [7, 9, 3, 0, 0, 0],
  m = 3,
  nums2 = [1, 1, 1],
  n = 3;
merge(nums1, m, nums2, n);
