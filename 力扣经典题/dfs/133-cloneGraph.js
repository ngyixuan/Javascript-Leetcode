class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }
}
var cloneGraph = function (node) {
  if (node == null) return null;
  var visited = new Map();
  return dfs(node, visited);
};
var dfs = function (node, visited) {
  if (visited.has(node)) return visited.get(node);
  let clone = new Node(node.val);
  visited.set(node, clone);
  for (let neighbor of node.neighbors) {
    clone.neighbors.push(dfs(neighbor, visited));
  }

  return clone;
};
let node = [
  [2, 4],
  [1, 3],
  [2, 4],
  [1, 3],
];
cloneGraph(node);
