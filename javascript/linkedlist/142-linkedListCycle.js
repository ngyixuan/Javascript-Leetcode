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

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast == slow) {
      break;
    }
  }
  if (fast == null || fast.next == null) {
    return null;
  }

  slow = head;
  while (slow != fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};
let list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
let list4 = new ListNode(4);
let list5 = new ListNode(5, new ListNode(6), new ListNode(7), new ListNode(8));
list1.next = list4;
list4.next = list5;
list5.next = list4;
console.log(detectCycle(list1));
