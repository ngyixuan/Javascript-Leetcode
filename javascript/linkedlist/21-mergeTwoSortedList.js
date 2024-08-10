/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  var p1 = list1;
  var p2 = list2;
  var sortedArr = new ListNode(-1);
  var curr = sortedArr;
  while (p1 !== null && p2 !== null) {
    if (p1.val <= p2.val) {
      curr.next = p1;
      p1 = p1.next;
    } else {
      curr.next = p2;
      p2 = p2.next;
    }
    curr = curr.next;
  }

  if (p1 !== null) {
    curr.next = p1;
  }
  if (p2 !== null) {
    curr.next = p2;
  }

  return sortedArr.next;
};
