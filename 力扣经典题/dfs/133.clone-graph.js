/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

class Node {
  constructor(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

var cloneGraph = function (node) {
  if (node == null) return null;
  let visitedMap = new Map();

  function dfs(node) {
    if (visitedMap.has(node)) return visitedMap.get(node);
    let cloneNode = new Node(node.val);
    visitedMap.set(node, cloneNode);
    for (let neighbor of node.neighbors) {
      cloneNode.neighbors.push(dfs(neighbor));
    }

    return cloneNode;
  }

  return dfs(node);
};
// @lc code=end
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

const clonedGraph = cloneGraph(node1);
console.log(clonedGraph);
