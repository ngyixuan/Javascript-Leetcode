var deleteDuplicates = function (head) {
  let dummyHead = new ListNode();
  dummyHead.next = head;

  let prev = dummyHead;
  let curr = head;

  while (curr) {
    if (curr.next && curr.val == curr.next.val) {
      while (curr.next && curr.val == curr.next.val) {
        curr = curr.next;
      }
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }

  return dummyHead.next;
};
class ListNode {
  constructor(val, next = null) {
    this.val = val; // 当前节点的值
    this.next = next; // 下一个节点
  }
}

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(4);
head.next.next.next.next.next.next = new ListNode(6);
let newHead = deleteDuplicates(head);

let curr = newHead;
while (curr !== null) {
  console.log(curr.val);
  curr = curr.next;
}
