/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let resultSet = new Set();
  let numSet = new Set(nums1.length > nums2.length ? nums1 : nums2);
  let smallerArr = nums1.length > nums2.length ? nums2 : nums1;

  for (let item of smallerArr) {
    if (numSet.has(item)) {
      resultSet.add(item);
    }
  }
  return [...resultSet];
};

// @lc code=end
let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
console.log(intersection(nums1, nums2));
