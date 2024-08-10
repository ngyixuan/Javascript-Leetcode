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
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var TreeNode = function (val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
};

var postorderIndexMap = new Map();
var build = function (
  preorder,
  preStart,
  preEnd,
  postorder,
  postStart,
  postEnd,
) {
  console.log(
    "prestart=",
    preStart,
    "preEnd=",
    preEnd,
    "postStart=",
    postStart,
    "postEnd=",
    postEnd,
  );

  if (preStart > preEnd) return null;
  if (preStart === preEnd) return new TreeNode(preorder[preStart]);

  let root = preorder[preStart]; //前序遍历的root节点
  let leftRootVal = preorder[preStart + 1]; //找到左子树的root
  let index = postorderIndexMap.get(leftRootVal); //找到leftRootVal 在后序遍历的索引
  let leftSize = index - postStart + 1; //左子树的节点数

  console.log("root=", root, "index=", index, "leftSize=", leftSize);

  root.left = build(
    preorder,
    preStart + 1,
    preStart + leftSize,
    postorder,
    postStart,
    index,
  );
  root.right = build(
    preorder,
    preStart + leftSize + 1,
    preEnd,
    postorder,
    index + 1,
    postEnd - 1,
  );
};
var constructFromPrePost = function (preorder, postorder) {
  for (let i = 0; i < postorder.length; i++) {
    postorderIndexMap.set(postorder[i], i);
  }
  build(preorder, 0, preorder.length - 1, postorder, 0, postorder.length - 1);
};

let preorder = [1, 2, 3];
let postorder = [3, 2, 1];
constructFromPrePost(preorder, postorder);
