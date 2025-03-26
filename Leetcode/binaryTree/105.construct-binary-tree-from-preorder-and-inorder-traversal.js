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
  let indexMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i);
  }

  function dfs(preStart, preEnd, preorder, inStart, inEnd, inorder) {
    if (preStart > preEnd) return null;
    let rootIndex = indexMap.get(preorder[preStart]);
    let root = new TreeNode(preorder[preStart]);
    let leftSize = rootIndex - inStart;
    root.left = dfs(
      preStart + 1,
      preStart + leftSize,
      preorder,
      inStart,
      rootIndex - 1,
      inorder
    );
    root.right = dfs(
      preStart + leftSize + 1,
      preEnd,
      preorder,
      rootIndex + 1,
      inEnd,
      inorder
    );

    return root;
  }

  return dfs(0, preorder.length - 1, preorder, 0, inorder.length, inorder);
};
// @lc code=end

let preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));
