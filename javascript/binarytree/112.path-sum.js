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
  let sum = 0;
  function traverse(root, sum) {
    if (root == null) return false;
    sum += root.val;
    if (root.left == null && root.right == null) return sum == targetSum;

    let leftSum = traverse(root.left, sum);
    let rightSum = traverse(root.right, sum);

    return leftSum || rightSum;
  }
  return traverse(root, sum);
};
// @lc code=end

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);

let newRoot = hasPathSum(root, 20);

console.log(newRoot);
