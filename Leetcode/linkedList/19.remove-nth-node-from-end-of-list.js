/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  let dummyHead = new ListNode(-1);
  dummyHead.next = head;
  let slow = dummyHead;
  let fast = dummyHead;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return dummyHead.next;
};
// @lc code=end

let p1 = new ListNode(1);
removeNthFromEnd(p1, 1);
let dummy = p1;
while (dummy != null) {
  console.log(dummy.val);
  dummy = dummy.next;
}
