/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let courseMap = new Map();
  let hasCycle = false;
  let visited = new Array(numCourses).fill(false);
  let onPath = new Array(numCourses.length);

  for (let [to, from] of prerequisites) {
    if (!courseMap.get(from)) {
      courseMap.set(from, []);
    }
    courseMap.get(from).push(to);
  }

  var traverse = function (graph, from, onPath) {
    if (hasCycle) return;
    if (onPath[from]) {
      hasCycle = true;
      return;
    }
    if (visited[from]) return;
    if (!graph.has(from)) return;

    visited[from] = true;
    onPath[from] = true;
    for (let to of graph.get(from)) {
      traverse(graph, to, onPath, hasCycle);
    }
    onPath[from] = false;
  };

  for (let i = 0; i < numCourses; i++) {
    traverse(courseMap, i, onPath);
  }

  return !hasCycle;
};

let numCourses = 4;
let prerequisites = [
  [1, 0],
  [2, 3],
];
console.log(canFinish(numCourses, prerequisites));
