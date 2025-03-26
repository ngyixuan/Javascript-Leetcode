/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  let prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;
  let left = sortList(head);
  let right = sortList(slow);

  return merge(left, right);
};

function merge(left, right) {
  let dummy = new ListNode(-1);
  let curr = dummy;
  while (left && right) {
    if (left.val < right.val) {
      curr.next = left;
      left = left.next;
    } else {
      curr.next = right;
      right = right.next;
    }

    curr = curr.next;
  }
  curr.next = left || right;

  return dummy.next;
}
// @lc code=end
function ListNode(val) {
  this.val = val;
  this.next = null;
}
let p1 = new ListNode(-1);
let p2 = new ListNode(5);
let p3 = new ListNode(3);
let p4 = new ListNode(4);
let p5 = new ListNode(0);
p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;
console.log(sortList(p1));
