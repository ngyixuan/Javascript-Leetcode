/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

function appendList(array) {
  let node = new ListNode();
  let cur = node;
  for (let i = 0; i < array.length; i++) {
    let node = new ListNode(array[i]);
    cur.next = node;
    cur = cur.next;
  }
  return node.next;
}

var reverseList = function (head) {
  // node = appendList(head);
  node = head;
  prev = null;
  curr = node;
  if (node == null) {
    return node;
  }

  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;

    prev = curr;
    curr = temp;
  }

  return prev;
};

head = [1, 2, 3, 4, 5];
node = reverseList(head);
console.log(node);
