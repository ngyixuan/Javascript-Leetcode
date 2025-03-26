/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let res = [];
  function traverse(root) {
    if (root == null) return;
    if (root.left) traverse(root.left);
    res.push(root.val);
    if (root.right) traverse(root.right);
  }

  traverse(root);
  return res;
};
// @lc code=end
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let t1 = new TreeNode(1);
let t2 = new TreeNode(2);
let t3 = new TreeNode(3);

t1.right = t2;
t2.left = t3;
console.log(inorderTraversal(t1));
