/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length == 0) return true;
  let map = new Array(numCourses).fill(0).map(() => []);
  let inDegree = new Array(numCourses).fill(0);
  for (let [to, from] of prerequisites) {
    map[from].push(to);
    inDegree[to]++;
  }
  let queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  let count = 0;
  while (queue.length > 0) {
    let courseIdx = queue.shift();
    count++;
    for (let to of map[courseIdx]) {
      inDegree[to]--;
      if (inDegree[to] === 0) queue.push(to);
    }
  }
  return count === numCourses;
};
// @lc code=end

let numCourses = 2,
  prerequisites = [[0, 1]];
console.log(canFinish(numCourses, prerequisites));
