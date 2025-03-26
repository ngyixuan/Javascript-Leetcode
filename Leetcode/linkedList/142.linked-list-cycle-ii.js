/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      fast = head;
      while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  return null;
};
// @lc code=end
function ListNode(val) {
  this.val = val;
  this.next = null;
}
let p1 = new ListNode(3);
let p2 = new ListNode(2);
let p3 = new ListNode(0);
let p4 = new ListNode(-4);
p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p2;
console.log(detectCycle(p1));
