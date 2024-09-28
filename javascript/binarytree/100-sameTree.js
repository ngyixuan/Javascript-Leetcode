var isSameTree = function (p, q) {
  function check(rootP, rootQ) {
    if (rootP == null && rootQ == null) return true;
    if (rootP == null || rootQ == null) return false;
    if (rootP.val !== rootQ.val) return false;
    let leftRoot = check(rootP.left, rootQ.left);
    let rightRoot = check(rootP.right, rootQ.right);

    return leftRoot && rightRoot;
  }
  return check(p, q);
};
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

const q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

console.log(isSameTree(p, q));
