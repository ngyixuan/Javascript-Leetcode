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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var partition = function (head, x) {
  let smaller = new ListNode(-1);
  let larger = new ListNode(-1);
  let s = smaller;
  let l = larger;
  let curr = head;
  while (curr !== null) {
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

let p1 = new ListNode(1);
let p2 = new ListNode(4);
let p3 = new ListNode(3);
let p4 = new ListNode(2);
let p5 = new ListNode(5);
let p6 = new ListNode(2);
p1.next = p2;
p2.next = p3;
p3.next = p4;
p4.next = p5;
p5.next = p6;

partition(p1, 3);
while (p1 !== null) {
  console.log(p1.val);

  p1 = p1.next;
}
