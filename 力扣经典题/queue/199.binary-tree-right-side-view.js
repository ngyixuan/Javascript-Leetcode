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
  if (root == null) return res;
  let queue = [root];
  while (queue.length > 0) {
    let temp = [];
    res.push(queue[queue.length - 1].val);
    while (queue.length > 0) {
      let currNode = queue.shift();
      if (currNode.left) temp.push(currNode.left);
      if (currNode.right) temp.push(currNode.right);
    }
    queue.push(...temp);
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
p2.right = p5;
p1.right = p3;
p3.right = p4;

console.log(rightSideView(p1));
