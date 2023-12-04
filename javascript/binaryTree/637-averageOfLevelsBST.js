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
bst.insert(1);
bst.insert(20);
bst.insert(15);
bst.insert(21);

var averageOfLevels = function (root) {
  if (!root) return 0;
  let queue = [root];
  let averageArr = [];

  while (queue.length) {
    let size = queue.length;
    let totalSum = 0;
    for (let i = 0; i < size; i++) {
      node = queue.shift();
      totalSum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    const res = totalSum / size;
    averageArr.push(res);
  }
  return averageArr;
};

averageOfLevels(bst.root);
