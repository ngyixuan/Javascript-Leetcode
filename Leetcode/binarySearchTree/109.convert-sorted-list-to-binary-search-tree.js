/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  function findMiddle(left, right) {
    let slow = left;
    let fast = left;
    while (fast !== right && fast.next !== right) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }
  function build(left, right) {
    if (left === right) return null;
    let mid = findMiddle(left, right);
    let root = new TreeNode(mid.val);
    root.left = build(left, mid);
    root.right = build(mid.next, right);

    return root;
  }

  return build(head, null);
};
// @lc code=end

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let p1 = new ListNode(-10);
let p2 = new ListNode(-3);
let p3 = new ListNode(0);
let p4 = new ListNode(5);
let p5 = new ListNode(9);
p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;

console.log(sortedListToBST(p1));
