/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return null;
  if (root.val === key) {
    if (root.left == null) return root.right;
    if (root.right == null) return root.left;

    let rightTreeMin = getMin(root.right);
    let deletedSubRight = deleteNode(root.right, rightTreeMin.val);
    rightTreeMin.left = root.left;
    rightTreeMin.right = deletedSubRight;
    root = rightTreeMin;
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }

  return root;
};
function getMin(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}
// @lc code=end
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let p2 = new TreeNode(2);
let p3 = new TreeNode(3);
let p4 = new TreeNode(4);
let p5 = new TreeNode(5);
let p6 = new TreeNode(6);
let p7 = new TreeNode(7);

p5.left = p3;
p5.right = p6;
p6.right = p7;
p3.left = p2;
p3.right = p4;

// deleteNode(p5, 3);
console.log(deleteNode(p5, 3));
