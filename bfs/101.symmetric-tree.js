/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function (root) {
  let queue = [root.left, root.right];
  while (queue.length) {
    let leftNode = queue.shift();
    let rightNode = queue.shift();
    if (!leftNode && !rightNode) continue;
    if (!leftNode || !rightNode) return false;
    if (leftNode.val !== rightNode.val) return false;
    queue.push(leftNode.left, rightNode.right);
    queue.push(leftNode.right, rightNode.left);
  }

  return true;
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
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(3);
root.right = new TreeNode(2);
root.right.right = new TreeNode(4);
root.right.left = new TreeNode(3);

console.log(isSymmetric(root));
