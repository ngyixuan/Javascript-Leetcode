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
// bst.insert(1);
// bst.insert(3);
// bst.insert(7);
// bst.insert(6);
// bst.insert(5);

var countNodes = function (root) {
  const findTotal = function (node) {
    if (!node) {
      return 0;
    }

    let leftNum = findTotal(node.left);
    let rightNum = findTotal(node.right);
    return leftNum + rightNum + 1;
  };
  findTotal(root);
};

countNodes(bst.root);
