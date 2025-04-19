/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let res = [];
  let map = new Array(numCourses).fill(0).map(() => []);
  let inDegree = new Array(numCourses).fill(0);
  let count = 0;
  for (let [to, from] of prerequisites) {
    map[from].push(to);
    inDegree[to]++;
  }

  let queue = [];
  for (let i = 0; i <= inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  while (queue.length > 0) {
    let currNode = queue.shift();
    count++;
    res.push(currNode);

    for (let toNode of map[currNode]) {
      inDegree[toNode]--;
      if (inDegree[toNode] === 0) {
        queue.push(toNode);
      }
    }
  }

  return count === numCourses ? res : [];
};
// @lc code=end
let numCourses = 4,
  prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ];
console.log(findOrder(numCourses, prerequisites));
