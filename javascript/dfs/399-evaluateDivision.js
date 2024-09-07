/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  let graph = new Map();
  let res = new Array(queries.length).fill(-1.0);
  let visited = new Set();
  for (let i = 0; i < equations.length; i++) {
    let a = equations[i][0];
    let b = equations[i][1];
    let w = values[i];
    if (!graph.has(a)) {
      graph.set(a, []);
    }
    if (!graph.has(b)) {
      graph.set(b, []);
    }
    graph.get(a).push({ node: b, weight: w });
    graph.get(b).push({ node: a, weight: 1.0 / w });
  }

  for (let i = 0; i < queries.length; i++) {
    res[i] = dfs(graph, queries[i][0], queries[i][1], visited);
  }
  return res;
};

var dfs = function (graph, start, end, visited) {
  if (!graph.has(start) || !graph.has(end)) return -1.0;
  if (start == end) return 1.0;

  visited.add(start);
  let neighbors = graph.get(start);
  for (let neighbor of neighbors) {
    if (visited.has(neighbor.node)) continue;
    console.log(visited, neighbor);
    let weight = dfs(graph, neighbor.node, end, visited);
    if (weight != -1.0) {
      visited.delete(start);
      return neighbor.weight * weight;
    }
  }

  visited.delete(start);
  return -1.0;
};

let equations = [
  ["a", "b"],
  ["b", "c"],
];
let values = [2.0, 3.0];
let queries = [["b", "a"]];
console.log(calcEquation(equations, values, queries));
