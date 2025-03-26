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
  function check(rootLeft, rootRight) {
    if (rootLeft == null && rootRight == null) return true;
    if (rootLeft == null || rootRight == null) return false;
    if (rootLeft.val != rootRight.val) return false;

    let leftTree = check(rootLeft.left, rootRight.right);
    let rightTree = check(rootLeft.right, rootRight.left);

    return leftTree && rightTree;
  }
  return check(root.left, root.right);
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
root.right.right = new TreeNode(5);
root.right.left = new TreeNode(3);

console.log(isSymmetric(root));
