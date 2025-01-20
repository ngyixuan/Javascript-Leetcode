/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (slow !== null && fast !== null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};
// @lc code=end

function ListNode(val) {
  this.val = val;
  this.next = null;
}
let p1 = new ListNode(3);
// let p2 = new ListNode(2);
// let p3 = new ListNode(0);
// let p4 = new ListNode(-4);
// p1.next = p2;
// p2.next = p3;
// p3.next = p4;

console.log(hasCycle(p1));
