/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  function traverse(node) {
    if (node == null) return;

    traverse(node.left);
    traverse(node.right);
    let originalRight = node.right;
    let originalLeft = node.left;
    node.left = null;
    node.right = originalLeft;
    let curr = node;
    while (curr.right !== null) {
      curr = curr.right;
    }
    curr.right = originalRight;
  }
  traverse(root);
  return root;
};
// @lc code=end
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Constructing the tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(6);

flatten(root);
let curr = root;
while (curr != null) {
  console.log(curr.val);
  curr = curr.right;
}
