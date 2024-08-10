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
 * @return {boolean}
 */
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new TreeNode(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val === current.val) return undefined;

      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}
bst = new BinaryTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(6);
bst.insert(20);

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isValid = function (root, min, max) {
  if (root == null) return true;
  if (min !== null && root.val <= min.val) return false;
  if (max !== null && root.val >= max.val) return false;

  return (
    isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
  );
};
var isValidBST = function (root) {
  return isValid(root, null, null);
};

console.log(isValidBST(bst.root));
