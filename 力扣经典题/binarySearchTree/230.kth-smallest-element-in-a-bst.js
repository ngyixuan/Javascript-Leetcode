/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let rank = 0;
  let res = null;
  function traverse(root, k) {
    if (root == null) return;
    traverse(root.left, k);
    rank++;
    if (rank === k) {
      res = root.val;
      return;
    }
    traverse(root.right, k);
  }

  traverse(root, k);
  return res;
};
// @lc code=end
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let p4 = new TreeNode(4);
let p2 = new TreeNode(2);
let p1 = new TreeNode(1, null, p2);
let p3 = new TreeNode(3, p1, p4);

console.log(kthSmallest(p3, 1));
