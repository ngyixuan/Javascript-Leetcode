/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var left;
var isPalindrome = function (head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast) {
    slow = slow.next;
  }
  let left = head;
  let right = reverse(slow);
  while (right) {
    if (left.val !== right.val) return false;
    left = left.next;
    right = right.next;
  }

  return true;
};

function reverse(head) {
  let prev, curr, next;
  prev = null;
  curr = head;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

let linklist = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(2, new ListNode(1)))),
);

console.log(isPalindrome(linklist));
