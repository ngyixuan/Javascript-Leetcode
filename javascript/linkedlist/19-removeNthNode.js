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
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var findFromEnd = function (head, n) {
  let p1 = head;

  for (let i = 0; i < n; i++) {
    if (p1 == null) return;
    p1 = p1.next;
  }
  let p2 = head;
  while (p1 !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
};
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-1);
  dummy.next = head;

  let node = findFromEnd(dummy, n + 1);
  node.next = node.next.next;

  return dummy.next;
};

let head = new ListNode(1, new ListNode(2));
console.log(removeNthFromEnd(head, 2));
