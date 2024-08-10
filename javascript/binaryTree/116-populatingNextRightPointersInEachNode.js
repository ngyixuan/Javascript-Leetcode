/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(root==null) return null
    root.next = null
    traverse(root.left, root.right)
    return root
};

var traverse = function(node1, node2){

    if(node1==null|| node2==null)return
    node1.next= node2
    node2.next = node2.next?node2.next:null
    traverse(node1.left, node1.right)
    traverse(node2.left,node2.right)
    traverse(node1.right, node2.left)

    

}