/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let A = headA;
  let B = headB;
  while (A !== B) {
    if (A == null) A = headB;
    else {
      A = A.next;
    }

    if (B == null) B = headA;
    else {
      B = B.next;
    }
  }

  return A;
};
// @lc code=end
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 创建链表 A: 1 -> 2 -> 3 -> 4 -> 5
let headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);
headA.next.next.next = new ListNode(4);
headA.next.next.next.next = new ListNode(5);

// 创建链表 B: 9 -> 8 -> 3 -> 4 -> 5
let headB = new ListNode(9);
headB.next = new ListNode(8);
headB.next.next = headA.next.next; // 相交节点为值为 3 的节点
let result = getIntersectionNode(headA, headB);
console.log(result);
