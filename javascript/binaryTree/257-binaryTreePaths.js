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

var binaryTreePaths = function (root) {
  let result = [];

  const findPaths = function (node, res) {
    if (node === null) return;

    res.push(node.val);

    if (node.left === null && node.right === null) {
      result.push(res.join("->"));
    }

    findPaths(node.left, res);
    findPaths(node.right, res);

    res.pop();
  };

  findPaths(root, []);

  return result;
};

binaryTreePaths(bst.root);
