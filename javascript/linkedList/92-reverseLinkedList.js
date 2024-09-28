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
var reverseBetween = function (head, left, right) {
  let successcor = null;
  function reverseNode(head, right) {
    if (right == 1) {
      successcor = head.next;
      return head;
    }
    let last = reverseNode(head.next, right - 1);
    head.next.next = head;
    head.next = successcor;
    return last;
  }
  if (left == 1) {
    return reverseNode(head, right);
  }
  head.next = reverseBetween(head.next, left - 1, right - 1);
  return head;
};

class ListNode {
  constructor(val, next = null) {
    this.val = val; // 当前节点的值
    this.next = next; // 下一个节点
  }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

let left = 2;
let right = 4;

reverseBetween(head, left, right);
let curr = head;
while (curr !== null) {
  console.log(curr.val);
  curr = curr.next;
}
