/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  function build(leftIndex, rightIndex) {
    if (leftIndex > rightIndex) return null;
    let mid = Math.floor((leftIndex + rightIndex) / 2);
    let root = new TreeNode(nums[mid]);
    let leftTree = build(leftIndex, mid - 1);
    let rightTree = build(mid + 1, rightIndex);
    root.left = leftTree;
    root.right = rightTree;

    return root;
  }
  return build(0, nums.length - 1);
};

// @lc code=end
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let nums = [-10, -3, 0, 5, 9];
console.log(sortedArrayToBST(nums));
