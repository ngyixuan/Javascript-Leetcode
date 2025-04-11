/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root == null) return false;
  if (!root.left && !root.right && root.val === targetSum) return true;
  let leftTree = hasPathSum(root.left, targetSum - root.val);
  let rightTree = hasPathSum(root.right, targetSum - root.val);

  return leftTree || rightTree;
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
// root.right = new TreeNode(8);
// root.left.left = new TreeNode(11);
// root.left.left.right = new TreeNode(2);
// root.right.left = new TreeNode(13);
// root.right.right = new TreeNode(4);

let newRoot = hasPathSum(root, 1);

console.log(newRoot);
