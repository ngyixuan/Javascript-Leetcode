/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
var reverseList = function (head) {
  if (head == null || head.next == null) return head;
  let node = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return node;
};
// @lc code=end
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let p1 = new ListNode(1);
// let p2 = new ListNode(2);
// let p3 = new ListNode(3);
// let p4 = new ListNode(4);
// let p5 = new ListNode(5);
// p1.next = p2;
// p2.next = p3;
// p3.next = p4;
// p4.next = p5;

let newP1 = reverseList(p1);
let dummy = newP1;
while (dummy != null) {
  console.log(dummy.val);
  dummy = dummy.next;
}
