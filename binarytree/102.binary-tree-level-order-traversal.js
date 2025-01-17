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
  if (root == null) return res;
  queue.push(root);
  while (queue.length > 0) {
    let path = [];
    let originalLen = queue.length;
    for (let i = 0; i < originalLen; i++) {
      let root = queue.shift();
      path.push(root.val);
      if (root.left) queue.push(root.left);
      if (root.right) queue.push(root.right);
    }
    res.push(path);
  }

  return res;
};
// @lc code=end
