/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var buildTree = function (preorder, inorder) {
  let inorderIndexMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderIndexMap.set(inorder[i], i);
  }
  function build(preStart, preEnd, inStart, inEnd) {
    if (inStart > inEnd) return null;
    let rootIndex = inorderIndexMap.get(preorder[preStart]);
    let root = new TreeNode(preorder[preStart]);
    let leftSize = rootIndex - inStart;
    root.left = build(
      preStart + 1,
      preStart + leftSize,
      inStart,
      rootIndex - 1,
    );
    root.right = build(preStart + leftSize + 1, preEnd, rootIndex + 1, inEnd);

    return root;
  }

  return build(0, preorder.length - 1, 0, inorder.length - 1);
};
// @lc code=end
let preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];

console.log(buildTree(preorder, inorder));
