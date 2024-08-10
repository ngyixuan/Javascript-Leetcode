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
 * @return {number}
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

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
bst.insert(9);
bst.insert(3);
bst.insert(20);
bst.insert(15);
console.log(bst);

var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  const maxDepth = function (root) {
    if (root === null) {
      return 0;
    }
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    let myDiameter = leftMax + rightMax;
    maxDiameter = Math.max(maxDiameter, myDiameter);
    return 1 + Math.max(leftMax, rightMax);
  };
  maxDepth(root);
  return maxDiameter;
};
console.log(diameterOfBinaryTree(bst.root));
