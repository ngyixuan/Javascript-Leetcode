class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function appendList(array) {
  let head = new ListNode();
  let current = head;
  array.forEach((element) => {
    newNode = new ListNode(element);
    current.next = newNode;
    current = newNode;
  });
  return head.next;
}

function concatListNode(lstA, lstC) {
  headA = appendList(lstA);
  headC = appendList(lstC);
}
var getIntersectionNode = function (headA, headB) {
  headA = appendList(headA);
  headB = appendList(headB);
  currA = headA;
  currB = headB;

  while (currA !== currB) {
    currA = currA ? currA.next : headB;
    currB = currB ? currB.next : headA;
    // console.log("currA", currA);
    // console.log("currB", currB);
    if (currA === currB) {
      // console.log("currA", currA);
    }
  }
};

lstA = [4, 2];
lstB = [5, 6, 1];
lstC = [8, 5];
concatListNode(lstA, lstC);
getIntersectionNode(lstA, lstB);
