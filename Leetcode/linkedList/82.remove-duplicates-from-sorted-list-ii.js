/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let curr = head;
  let prev = dummy;
  while (curr) {
    if (curr.next && curr.next.val === curr.val) {
      while (curr.next && curr.next.val === curr.val) {
        curr = curr.next;
      }
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  return dummy.next;
};
// @lc code=end
function ListNode(val) {
  this.val = val;
  this.next = null;
}
let p1 = new ListNode(1);
let p2 = new ListNode(2);
let p3 = new ListNode(3);
let p4 = new ListNode(3);
let p5 = new ListNode(4);
let p6 = new ListNode(4);
let p7 = new ListNode(5);
p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;
p5.next = p6;
p6.next = p7;
console.log(deleteDuplicates(p1));
