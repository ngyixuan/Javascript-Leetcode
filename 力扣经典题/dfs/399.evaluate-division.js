/*
 * @lc app=leetcode id=399 lang=javascript
 *
 * [399] Evaluate Division
 */

// @lc code=start
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  class Edge {
    constructor(node, weight) {
      this.node = node;
      this.weight = weight;
    }
  }
  let graph = new Map();
  let res = new Array(queries.length).fill(-1);
  let visited = new Set();
  for (let i = 0; i < equations.length; i++) {
    let from = equations[i][0];
    let to = equations[i][1];
    let weight = values[i];
    if (!graph.has(from)) {
      graph.set(from, []);
    }
    if (!graph.has(to)) {
      graph.set(to, []);
    }
    graph.get(from).push(new Edge(to, weight));
    graph.get(to).push(new Edge(from, 1 / weight));
  }
  for (let i = 0; i < queries.length; i++) {
    let start = queries[i][0];
    let end = queries[i][1];
    res[i] = dfs(graph, start, end, visited);
  }

  return res;
};

function dfs(graph, start, end, visited) {
  if (!graph.has(start) || !graph.has(end)) {
    return -1;
  }

  if (start === end) {
    return 1;
  }
  visited.add(start);
  let neighbors = graph.get(start);
  for (let neighbor of neighbors) {
    if (visited.has(neighbor.node)) continue;
    let weight = dfs(graph, neighbor.node, end, visited);
    console.log(start, end, weight);
    if (weight !== -1) {
      visited.delete(start);
      return neighbor.weight * weight;
    }
  }
  visited.delete(start);
  return -1;
}
// @lc code=end
let equations = [
    ["a", "b"],
    ["b", "c"],
  ],
  values = [2.0, 3.0],
  queries = [["a", "e"]];
console.log(calcEquation(equations, values, queries));
