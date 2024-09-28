/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
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
 */
var BSTIterator = function (root) {
  this.arr = [];
  this.curr = 0;
  const traverse = (root) => {
    if (root == null) return;
    traverse(root.left);
    this.arr.push(root.val);
    traverse(root.right);
  };
  traverse(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.arr[this.curr++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.curr < this.arr.length;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const root = new TreeNode(7);
root.left = new TreeNode(3);
root.right = new TreeNode(15);
root.right.left = new TreeNode(9);
root.right.right = new TreeNode(20);

var obj = new BSTIterator(root);
console.log(obj.next());
