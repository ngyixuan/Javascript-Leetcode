
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
  bst.insert(-10);
  bst.insert(9);
  bst.insert(20);
  bst.insert(7);
  bst.insert(15);

console.log(bst)
var maxPathSum = function(root) {
    let maxValue = -Infinity
    const maxSum = function(root){
        if(root===null || root.val===null){
            return -Infinity 
        }
        let leftMax = maxSum(root.left)
        let rightMax = maxSum(root.right)
        let myMaxValue = root.val + leftMax + rightMax
        let myPartMaxValue =  root.val +Math.max(leftMax, rightMax)
        maxValue = Math.max(maxValue, myMaxValue, myPartMaxValue, rightMax, leftMax, root.val )
        return Math.max(root.val,myPartMaxValue)

    }

    maxSum(root)
    return maxValue
};

console.log(maxPathSum(bst.root))