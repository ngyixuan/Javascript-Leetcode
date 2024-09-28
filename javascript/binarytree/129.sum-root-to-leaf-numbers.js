/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
var sumNumbers = function (root) {
  let res = [];
  let totalSum = 0;
  function traverse(root, path) {
    if (root == null) return;
    path.push(root.val);
    if (root.left == null && root.right == null) {
      res.push(path.join(""));
      return;
    }

    traverse(root.left, path);
    if (root.left) path.pop();
    traverse(root.right, path);
    if (root.right) path.pop();
  }

  traverse(root, []);
  for (let item of res) {
    totalSum += parseInt(item);
  }
  return totalSum;
};
// @lc code=end
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const root = new TreeNode(4);
root.left = new TreeNode(9);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(1);
root.right = new TreeNode(0);

console.log(sumNumbers(root));
