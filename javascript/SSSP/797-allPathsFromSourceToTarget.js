/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  var res = [];
  var path = [];
  var traverse = function (graph, start, path) {
    path.push(start);
    if (start === graph.length - 1) {
      res.push([...path]);
    }
    console.log(res);
    for (let i = 0; i < graph[start].length; i++) {
      traverse(graph, graph[start][i], path);
    }
    path.pop();
  };
  traverse(graph, 0, path);
  return res;
};

const graph = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph));
