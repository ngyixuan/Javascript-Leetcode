class TreeNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) return true;
  }

  return false;
};

let head = new TreeNode();
let arr = [3, 2, 0, -4];
let curr = head;
for (let item of arr) {
  if (item == 2) {
    let second = new TreeNode(item);
    curr.next = second;
  } else {
    curr.next = new TreeNode(item);
  }
  curr = curr.next;
}

curr.next = second;
hasCycle(head.next);
