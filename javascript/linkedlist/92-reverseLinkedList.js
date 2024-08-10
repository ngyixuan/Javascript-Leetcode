/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let reverseN = function (head, n) {
  let prev = null;
  let curr = head;
  for (let i = 0; i < n; i++) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  head.next = curr;

  return prev;
};
var reverseBetween = function (head, left, right) {
  if (left == 1) {
    return reverseN(head, right);
  }

  head.next = reverseBetween(head.next, left - 1, right);
  return head;
};

let linklist = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
);
let head = reverseBetween(linklist, 2, 4);
while (head != null) {
  console.log(head.val);
  head = head.next;
}
