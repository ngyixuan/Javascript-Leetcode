/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var buildTree = function (inorder, postorder) {
  let inorderMap = new Map();

  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  function build(inStart, inEnd, postStart, postEnd) {
    if (inStart > inEnd) return null;
    let rootVal = postorder[postEnd];
    let root = new TreeNode(rootVal);
    let inorderRootIndex = inorderMap.get(rootVal);

    let leftSize = inorderRootIndex - inStart;

    root.left = build(
      inStart,
      inorderRootIndex - 1,
      postStart,
      postStart + leftSize - 1,
    );

    root.right = build(
      inorderRootIndex + 1,
      inEnd,
      postStart + leftSize,
      postEnd - 1,
    );

    return root;
  }

  return build(0, inorder.length - 1, 0, postorder.length - 1);
};
// @lc code=end

let inorder = [9, 3, 15, 20, 7],
  postorder = [9, 15, 7, 20, 3];
console.log(buildTree(inorder, postorder));
