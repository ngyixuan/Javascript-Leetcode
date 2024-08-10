
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
bst.insert(15);
bst.insert(4);
bst.insert(1);
bst.insert(2);
bst.insert(20);

var traverse = function(root){
  if(root===null){
    return
  }
  console.log(root.val)
  traverse(root.left)
  traverse(root.right)
}

var invertTree = function(root) {
    var traverse = function(root){
      if(root == null) return
      var temp = root.left
      root.left = root.right
      root.right = temp
      traverse(root.left)
      traverse(root.right)

    }

    traverse(root)
    return root

};

invertTree(bst.root)

traverse(bst.root)