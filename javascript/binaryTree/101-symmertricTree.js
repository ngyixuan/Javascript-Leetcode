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
bst.insert(5);
bst.insert(7);
bst.insert(6);
bst.insert(3);
bst.insert(4);
bst.insert(1);
bst.insert(8);

var isSymmetric = function (root) {
  const compare = function (left, right) {
    if ((left == null && right !== null) || (left !== null && right == null))
      return false;
    else if (left == null && right == null) return true;
    else if (left.val !== right.val) return false;

    let outside = compare(left.left, right.right);
    let inside = compare(left.right, right.left);
    return outside && inside;
  };
  if (root === null) return true;
  let res = compare(root.left, root.right);
  console.log(res);
};

isSymmetric(bst.root);
