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
bst.insert(4);
bst.insert(2);
bst.insert(1);
bst.insert(3);
bst.insert(7);
bst.insert(6);

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

var countNodes = function (root) {
  var leftHeight = 0;
  var rightHeight = 0;
  var left = root;
  var right = root;
  while (left !== null) {
    leftHeight++;
    left = left.left;
  }
  while (right !== null) {
    rightHeight++;
    right = right.right;
  }

  if (rightHeight === leftHeight) {
    return Math.pow(2, rightHeight) - 1;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};

console.log(countNodes(bst.root));
