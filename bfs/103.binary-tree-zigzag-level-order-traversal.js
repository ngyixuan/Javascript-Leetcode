/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
var zigzagLevelOrder = function (root) {
  let res = [];
  if (!root) return res;
  let flag = true; //右到左
  let queue = [root];
  while (queue.length > 0) {
    let queueLen = queue.length;
    let temp = [];
    for (let i = 0; i < queueLen; i++) {
      let node = queue.shift();

      if (flag) {
        temp.push(node.val);
      } else {
        temp.unshift(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push([...temp]);
    flag = !flag;
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
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(zigzagLevelOrder(root));
