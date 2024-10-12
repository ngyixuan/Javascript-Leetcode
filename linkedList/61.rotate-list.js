/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (k == 0 || head == null || head.next == null) return head;
  let totalLen = 1;
  let curr = head;
  while (curr.next != null) {
    curr = curr.next;
    totalLen++;
  }

  let rotateTimes = k % totalLen;
  if (rotateTimes == 0) return head;

  curr = head;
  for (let i = 0; i < totalLen - rotateTimes - 1; i++) {
    curr = curr.next;
  }

  let newTail = curr;
  let newHead = curr.next;

  let tail = curr;
  while (tail.next != null) {
    tail = tail.next;
  }
  tail.next = head;
  newTail.next = null;

  return newHead;
};
// @lc code=end
class ListNode {
  constructor(val, next = null) {
    this.val = val; // 当前节点的值
    this.next = next; // 下一个节点
  }
}

let head = new ListNode(0);
head.next = new ListNode(1);
head.next.next = new ListNode(2);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

let newHead = rotateRight(head, 2);
let curr = newHead;
while (curr !== null) {
  console.log(curr.val);
  curr = curr.next;
}
