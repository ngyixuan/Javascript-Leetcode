/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  function check(rootP, rootQ) {
    if (rootP == null && rootQ == null) return true;
    if (rootP == null || rootQ == null) return false;
    if (rootP.val !== rootQ.val) return false;
    let leftRoot = check(rootP.left, rootQ.left);
    let rightRoot = check(rootP.right, rootQ.right);

    return leftRoot && rightRoot;
  }

  return check(p, q);
};
// @lc code=end

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

const q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

console.log(isSameTree(p, q));
