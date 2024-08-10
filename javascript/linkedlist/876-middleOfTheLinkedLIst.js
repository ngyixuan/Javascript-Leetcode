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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast.next != null && fast != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

let llist = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
);
console.log(middleNode(llist));
