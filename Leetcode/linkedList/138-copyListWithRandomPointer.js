/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  let nodeMap = new Map();

  for (let p = head; p != null; p = p.next) {
    if (!nodeMap.has(p)) {
      nodeMap.set(p, new _Node(p.val));
    }
  }

  for (let p = head; p != null; p = p.next) {
    if (p.next != null) {
      nodeMap.get(p).next = nodeMap.get(p.next);
    }
    if (p.random != null) {
      nodeMap.get(p).random = nodeMap.get(p.random);
    }
  }

  return nodeMap.get(head);
};
