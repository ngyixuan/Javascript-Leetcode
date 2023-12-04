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
bst.insert(2);
bst.insert(3);
bst.insert(4);
bst.insert(5);
bst.insert(6);

var minDepth = function (root) {
  const findDepth = function (node) {
    if (node == null) return 0;
    let leftDepth = findDepth(node.left);
    let rightDepth = findDepth(node.right);

    if (node.left == null && node.right) {
      return rightDepth + 1;
    }
    if (node.right == null && node.left) {
      return leftDepth + 1;
    }
    return Math.min(leftDepth, rightDepth) + 1;
  };

  return findDepth(root);
};

console.log(minDepth(bst.root));
