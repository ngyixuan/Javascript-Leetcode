/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
var countNodes = function (root) {
  function traverse(root) {
    if (root == null) return 0;
    let leftNode = traverse(root.left);
    let rightNode = traverse(root.right);

    return leftNode + rightNode + 1;
  }
  return traverse(root);
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
// root.left = new TreeNode(2);
// root.left.left = new TreeNode(4);
// root.left.right = new TreeNode(5);
// root.right = new TreeNode(3);
// root.right.left = new TreeNode(6);

console.log(countNodes(root));
