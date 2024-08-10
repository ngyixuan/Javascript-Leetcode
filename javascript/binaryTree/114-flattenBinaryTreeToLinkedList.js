
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */


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

var traverse = function(root){
    if(root==null)return
    
    traverse(root.left)
    console.log(root.val)
    traverse(root.right)
}
traverse(bst.root)

var flatten = function(root) {
    if(root==null)return
    flatten(root.left)
    flatten(root.right)
    var left = root.left
    var right = root.right
    root.left = null
    root.right = left
    var p = root
    while(p.right!==null){
        p = p.right
    }
    p.right = right
};