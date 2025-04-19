/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
 * @return {number[]}
 */
var rightSideView = function (root) {
  let res = [];
  if (!root) return res;
  let queue = [root];
  while (queue.length > 0) {
    let temp = [];
    let qLen = queue.length;
    for (let i = 0; i < qLen; i++) {
      let node = queue.shift();
      temp.unshift(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    if (temp.length > 0) {
      res.push(temp[0]);
    }
  }

  return res;
};
// @lc code=end

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let p1 = new TreeNode(1);
let p2 = new TreeNode(2);
let p3 = new TreeNode(3);
let p4 = new TreeNode(4);
let p5 = new TreeNode(5);

p1.left = p2;
p1.right = p3;
p2.left = p4;
p4.left = p5;

console.log(rightSideView(p1));
