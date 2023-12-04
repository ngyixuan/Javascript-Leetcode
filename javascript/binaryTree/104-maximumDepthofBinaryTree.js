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
bst.insert(27);
var maxDepth = function (root) {
  const findDepth = function (node) {
    if (!node) return 0;
    let left = findDepth(node.left);
    let right = findDepth(node.right);
    return Math.max(left, right) + 1;
  };

  return findDepth(root);
};

console.log(maxDepth(bst.root));
