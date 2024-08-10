/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
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
bst.insert(15);
bst.insert(4);
bst.insert(1);
bst.insert(2);
bst.insert(20);

var kthSmallest = function (root, k) {
  var rank = 0;
  var res = 0;
  var traverse = function (root, k) {
    if (root === null) return;
    traverse(root.left, k);
    rank++;
    if (rank == k) {
      res = root.val;
      return;
    }
    traverse(root.right, k);
  };
  traverse(root, k);
  return res;
};

console.log(kthSmallest(bst.root, 3));
