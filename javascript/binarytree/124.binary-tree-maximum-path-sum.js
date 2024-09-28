/*
 * @lc app=leetcode id=124 lang=javascript
 *
 * [124] Binary Tree Maximum Path Sum
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let maxPathSum = -Infinity;
  function traverse(root) {
    if (root == null) return 0;
    let leftMax = Math.max(0, traverse(root.left));
    let rightMax = Math.max(0, traverse(root.right));
    let partPathSum = Math.max(leftMax, rightMax) + root.val;
    let fullPathSum = root.val + leftMax + rightMax;

    maxPathSum = Math.max(maxPathSum, fullPathSum);
    return partPathSum;
  }
  traverse(root);
  return maxPathSum;
};
// @lc code=end
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
//   root.left.left = new TreeNode(1);
//   root.left.right = new TreeNode(3);
root.right = new TreeNode(3);
// root.right.left = new TreeNode(15);
// root.right.right = new TreeNode(7);

console.log(maxPathSum(root));
