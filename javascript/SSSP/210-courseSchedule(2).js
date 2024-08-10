/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  var graph = new Array(numCourses).fill(0).map(() => []);
  var indegree = new Array(numCourses).fill(0);
  var buildGraph = function (numCourses, prerequisites) {
    for (const course of prerequisites) {
      let to = course[0];
      let from = course[1];
      graph[from].push(to);
      indegree[to]++; //记录每个点的入度
    }
  };

  buildGraph(numCourses, prerequisites);

  var stack = [];

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] == 0) {
      stack.push(i);
    }
  }
  var res = [];
  var count = 0;
  while (stack.length > 0) {
    let currCourse = stack.shift();
    res.push(currCourse);
    count++;
    for (const next of graph[currCourse]) {
      indegree[next]--;

      if (indegree[next] === 0) {
        stack.push(next);
      }
    }
  }

  return count === numCourses ? res : [];
};

let numCourses = 4;
let prerequisites = [
  [1, 0],
  [2, 0],
  [3, 1],
  [3, 2],
];

console.log(findOrder(numCourses, prerequisites));
