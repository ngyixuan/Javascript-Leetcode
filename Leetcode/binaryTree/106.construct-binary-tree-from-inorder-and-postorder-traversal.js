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
var buildTree = function (inorder, postorder) {
  let valToIndex = new Map();
  for (let i = 0; i < inorder.length; i++) {
    valToIndex.set(inorder[i], i);
  }
  function traverse(inorder, inStart, inEnd, postorder, postStart, postEnd) {
    if (inEnd < inStart) return null;
    let rootIndex = valToIndex.get(postorder[postEnd]);
    let root = new TreeNode(postorder[postEnd]);
    let leftSize = rootIndex - inStart;

    root.left = traverse(
      inorder,
      inStart,
      rootIndex - 1,
      postorder,
      postStart,
      postStart + leftSize - 1
    );
    root.right = traverse(
      inorder,
      rootIndex + 1,
      inEnd,
      postorder,
      postStart + leftSize,
      postEnd - 1
    );

    return root;
  }

  return traverse(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
};
// @lc code=end
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Constructing the tree
let inorder = [9, 3, 15, 20, 7],
  postorder = [9, 15, 7, 20, 3];

console.log(buildTree(inorder, postorder));
