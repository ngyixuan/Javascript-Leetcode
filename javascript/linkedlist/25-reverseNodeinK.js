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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var reverse = function (a, b) {
  let pre, curr, next;
  pre = null;
  curr = a;
  next = a;
  while (curr !== b) {
    next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }

  return pre;
};

var reverseKGroup = function (head, k) {
  if (head === null) return head;
  let a = head;
  let b = head;
  for (let i = 0; i < k; i++) {
    if (b === null) return head;
    b = b.next;
  }

  let newHead = reverse(a, b);
  a.next = reverseKGroup(b, k);

  return newHead;
};

function createLinkedList(arr) {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}
let list = createLinkedList([1, 2, 3, 4, 5, 6]);
console.log("Original list:");
printLinkedList(list);
let a = list;
let b = list;
for (let i = 0; i < 1; i++) {
  b = b.next;
}

let newHead = reverseKGroup(list, 2);
printLinkedList(newHead);
