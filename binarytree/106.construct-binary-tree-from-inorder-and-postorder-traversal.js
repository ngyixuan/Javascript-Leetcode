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
  var build = function (
    inorder,
    inStart,
    inEnd,
    postorder,
    postStart,
    postEnd
  ) {
    if (inStart > inEnd) return null;
    let rootVal = postorder[postEnd];
    let rootIndex = valToIndex.get(rootVal);
    let leftSize = rootIndex - inStart;
    let root = new TreeNode(rootVal);
    root.left = build(
      inorder,
      inStart,
      rootIndex - 1,
      postorder,
      postStart,
      postStart + leftSize - 1
    );

    root.right = build(
      inorder,
      rootIndex + 1,
      inEnd,
      postorder,
      postStart + leftSize,
      postEnd - 1
    );

    return root;
  };

  return build(
    inorder,
    0,
    inorder.length - 1,
    postorder,
    0,
    postorder.length - 1
  );
};

// @lc code=end
