/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root == null) return null;
  if (root.right == null && root.left == null) return root;
  let leftNode = invertTree(root.left);
  let rightNode = invertTree(root.right);
  root.left = rightNode;
  root.right = leftNode;

  return root;
};
// @lc code=end
// Constructing the tree

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right = new TreeNode(7);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

console.log(invertTree(root));
