/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let dummyHead = new ListNode();
  dummyHead.next = head;
  let prev = dummyHead;
  let curr = head;
  let successcor = null;
  function reverseNode(head, k) {
    if (head == null) return null;
    if (k == 1) {
      successcor = head.next;
      return head;
    }

    let last = reverseNode(head.next, k - 1);
    head.next.next = head;
    head.next = successcor;
    return last;
  }
  function getLength(node) {
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  while (curr !== null && getLength(curr) >= k) {
    let last = reverseNode(curr, k);
    prev.next = last;
    prev = curr;
    curr = successcor;
    successcor = null;
  }
  return dummyHead.next;
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

let newHead = reverseKGroup(head, 2);
let curr = newHead;
while (curr !== null) {
  console.log(curr.val);
  curr = curr.next;
}
