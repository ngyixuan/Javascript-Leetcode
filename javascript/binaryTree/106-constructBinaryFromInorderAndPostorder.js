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
var inorderindexMap = {};
var build = function (inorder, postorder, inStart, inEnd, postStart, postEnd) {
  if (inStart > inEnd) return null;
  let rootVal = postorder[postEnd];
  let index = inorderindexMap[rootVal];
  let root = new TreeNode(rootVal);
  root.left = build(
    inorder,
    postorder,
    inStart,
    index - 1,
    postStart,
    postStart + index - inStart - 1,
  );
  root.right = build(
    inorder,
    postorder,
    index + 1,
    inEnd,
    postStart + index - inStart,
    postEnd - 1,
  );

  return root;
};

var buildTree = function (inorder, postorder) {
  for (let i = 0; i < inorder.length; i++) {
    inorderindexMap[inorder[i]] = i;
  }
  return build(
    inorder,
    postorder,
    0,
    inorder.length - 1,
    0,
    postorder.length - 1,
  );
};
