/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let queue = [];
  let res = [];
  if (root == null) return [];
  queue.push(root);
  while (queue.length > 0) {
    let temp = [];
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let head = queue.shift();
      temp.push(head.val);
      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
    }
    res.push(temp);
  }

  return res;
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
root.left = new TreeNode(9);
root.left.left = new TreeNode(15);
root.left.right = new TreeNode(7);
root.right = new TreeNode(20);

console.log(levelOrder(root));
