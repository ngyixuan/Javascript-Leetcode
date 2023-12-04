/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// function appendListNode(array) {
//   let head = new ListNode();
//   let current = head;
//   array.forEach((element) => {
//     newNode = new ListNode(element);
//     current.next = newNode;
//     current = newNode;
//   });
//   return head.next;
// }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) {
    return null;
  }
  let slow = head.next;
  let fast = head.next.next;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      console.log(slow);
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }

      return slow;
    }
  }

  return null;
};

// lst = [1, 2, 3, 4];
a = new ListNode(1);
b = new ListNode(2);
c = new ListNode(3);
d = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;
d.next = b;

detectCycle(a);
