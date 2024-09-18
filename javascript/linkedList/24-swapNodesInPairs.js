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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var swapPairs = function (head) {
  let dummy = new ListNode(0, head);
  let prev = dummy,
    curr = head;

  while (curr && curr.next) {
    let nextnext = curr.next.next;
    let next = curr.next;

    next.next = curr;
    curr.next = nextnext;
    prev.next = next;

    prev = curr;
    curr = nextnext;
  }

  return dummy.next;
};

let head = [1, 2, 3, 4];
let newHead = new ListNode(0);
let curr = newHead;
for (let item of head) {
  curr.next = new ListNode(item);
  curr = curr.next;
}

let res = swapPairs(newHead.next);
let temp = res;
while (temp) {
  console.log(temp.val);
  temp = temp.next;
}
