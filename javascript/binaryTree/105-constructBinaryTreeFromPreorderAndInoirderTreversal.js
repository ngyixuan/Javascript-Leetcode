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
var inorderIndexMap = new Map();

var buildTree = function (preorder, inorder) {
  for (let i = 0; i < inorder.length; i++) {
    inorderIndexMap.set(inorder[i], i);
  }

  return build(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1,
  );
};

var build = function (preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if (preStart > preEnd) return null;
  let rootVal = preorder[preStart];
  let root = new TreeNode(rootVal);

  let rootIndex = inorderIndexMap.get(rootVal);
  let leftSize = rootIndex - inStart;

  root.left = build(
    preorder,
    preStart + 1,
    preStart + leftSize,
    inorder,
    inStart,
    rootIndex - 1,
  );
  root.right = build(
    preorder,
    preStart + leftSize + 1,
    preEnd,
    inorder,
    rootIndex + 1,
    inEnd,
  );

  return root;
};
let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
let root = buildTree(preorder, inorder);

console.log(root);
