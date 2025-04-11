/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function (root) {
  function traverse(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    let left = traverse(node.left, min, node.val);
    let right = traverse(node.right, node.val, max);
    return left && right;
  }

  return traverse(root, -Infinity, Infinity);
};
// @lc code=end
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// let p1 = new TreeNode(2);
// let p2 = new TreeNode(2);
let p3 = new TreeNode(2);
let p4 = new TreeNode(4);
let p5 = new TreeNode(5);
let p6 = new TreeNode(6);
let p7 = new TreeNode(7);

// p5.left = p1;
// p5.right = p4;
// p4.left = p3;
// p4.right = p6;

p5.left = p4;
p5.right = p6;
p6.left = p3;
p6.right = p7;

console.log(isValidBST(p5));
