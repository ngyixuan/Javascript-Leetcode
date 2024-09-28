/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let s1 = l1;
  let s2 = l2;
  let carry = 0;
  let dummyHead = new ListNode();
  let curr = dummyHead;

  while (s1 !== null && s2 !== null) {
    let total = s1.val + s2.val + carry;

    if (Math.floor(total / 10) != 1) carry = 0;
    else {
      carry = 1;
    }

    curr.next = new ListNode(total % 10);
    curr = curr.next;

    s1 = s1.next;
    s2 = s2.next;
  }

  while (s1 !== null) {
    let total = s1.val + carry;
    if (Math.floor(total / 10) != 1) carry = 0;
    else {
      carry = 1;
    }
    curr.next = new ListNode(total % 10);
    curr = curr.next;
    s1 = s1.next;
  }
  while (s2 !== null) {
    let total = s2.val + carry;
    if (Math.floor(total / 10) != 1) carry = 0;
    else {
      carry = 1;
    }
    curr.next = new ListNode(total % 10);
    curr = curr.next;
    s2 = s2.next;
  }

  if (carry === 1) curr.next = new ListNode(carry);

  return dummyHead.next;
};

class ListNode {
  constructor(val, next = null) {
    this.val = val; // 当前节点的值
    this.next = next; // 下一个节点
  }
}
let l1 = new ListNode(9);
l1.next = new ListNode(9);
l1.next.next = new ListNode(9);
l1.next.next.next = new ListNode(9);
l1.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next = new ListNode(9);
l1.next.next.next.next.next.next = new ListNode(9);

let l2 = new ListNode(9);
l2.next = new ListNode(9);
l2.next.next = new ListNode(9);
l2.next.next.next = new ListNode(9);

let newHead = addTwoNumbers(l1, l2);
let curr = newHead;
while (curr !== null) {
  console.log(curr.val);
  curr = curr.next;
}
