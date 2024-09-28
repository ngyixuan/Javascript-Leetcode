/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  if (!root) return;
  let queue = [root];

  while (queue.length > 0) {
    let temp = [];
    for (let i = 0; i < queue.length; i++) {
      let node = queue[i];

      if (node.left) {
        temp.push(node.left);
      }
      if (node.right) {
        temp.push(node.right);
      }

      node.next = queue[i + 1] || null;
    }

    queue = temp;
  }

  return root;
};
// @lc code=end
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Constructing the tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(7);

let newRoot = connect(root);

console.log(newRoot);
