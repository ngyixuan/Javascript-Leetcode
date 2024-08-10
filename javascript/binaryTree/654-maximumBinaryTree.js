/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var constructMaximumBinaryTree = function (nums) {
  return build(nums, 0, nums.length - 1);
};

var build = function (nums, lo, hi) {
  if (lo > hi) return null;
  let index = -1;
  let maxValue = Number.MIN_SAFE_INTEGER;
  for (let i = lo; i <= hi; i++) {
    if (nums[i] > maxValue) {
      maxValue = nums[i];
      index = i;
    }
  }
  let leftNode = build(nums, lo, index - 1);
  let rightNode = build(nums, index + 1, hi);
  let node = new TreeNode(maxValue, leftNode, rightNode);
  return node;
};

let nums = [3, 2, 1, 6, 0, 5];
const root = constructMaximumBinaryTree(nums);

function traverse(root) {
  if (root == null) return;
  console.log(root.val);
  traverse(root.left);
  traverse(root.right);
}
traverse(root);
