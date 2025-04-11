/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let fast = head;
  let slow = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let tail = reverse(slow.next);
  slow.next = null;
  let front = head;
  while (front != null && tail != null) {
    let temp1 = front.next;
    let temp2 = tail.next;
    front.next = tail;
    tail.next = temp1;
    front = temp1;
    tail = temp2;
  }

  function reverse(head) {
    if (head == null || head.next == null) return head;
    let node = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return node;
  }
};
// @lc code=end
function ListNode(val) {
  this.val = val;
  this.next = null;
}
let headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);
headA.next.next.next = new ListNode(4);
headA.next.next.next.next = new ListNode(5);
let curr = reorderList(headA);

while (curr != null) {
  console.log(curr.val);
  curr = curr.next;
}
