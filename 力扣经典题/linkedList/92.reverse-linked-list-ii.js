/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  let prev = slow;
  while (right > 0) {
    fast = fast.next;
    right--;
  }
  while (left > 0) {
    prev = slow;
    slow = slow.next;
    left--;
  }

  let tail = fast.next;
  function reverseNode(head, successor) {
    if (head == successor) {
      return head;
    }
    let node = reverseNode(head.next, successor);

    head.next.next = head;
    head.next = null;

    return node;
  }
  prev.next = reverseNode(slow, fast);
  slow.next = tail;

  return dummy.next;
};
// @lc code=end
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
