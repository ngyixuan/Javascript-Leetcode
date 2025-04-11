/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
var countNodes = function (root) {
  function getHeight(node, isLeft) {
    let height = 0;
    while (node != null) {
      node = isLeft ? node.left : node.right;
      height++;
    }

    return height;
  }
  if (root == null) return 0;

  let heightLeft = getHeight(root, true);
  let heightRight = getHeight(root, false);
  if (heightLeft === heightRight) {
    return Math.pow(2, heightLeft) - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
};
// @lc code=end
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), null)
);
console.log(countNodes(root));
