/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let smaller = new ListNode();
  let larger = new ListNode();
  let s = smaller;
  let l = larger;
  let curr = head;
  while (curr != null) {
    if (curr.val < x) {
      s.next = curr;
      s = s.next;
    } else {
      l.next = curr;
      l = l.next;
    }

    let temp = curr.next;
    curr.next = null;
    curr = temp;
  }

  s.next = larger.next;

  return smaller.next;
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
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(3);
head.next.next.next.next.next = new ListNode(5);
let newHead = partition(head, 3);
let curr = newHead;
while (curr != null) {
  console.log(curr.val);
  curr = curr.next;
}
