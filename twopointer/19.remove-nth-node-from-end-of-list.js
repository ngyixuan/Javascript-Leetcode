/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = fast;
  return dummy.next;
};
// @lc code=end
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let p1 = new ListNode(1);
let p2 = new ListNode(2);
let p3 = new ListNode(3);
let p4 = new ListNode(4);
let p5 = new ListNode(5);
p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;
removeNthFromEnd(p1, 2);
let dummy = p1;
while (dummy != null) {
  console.log(dummy.val);
  dummy = dummy.next;
}
