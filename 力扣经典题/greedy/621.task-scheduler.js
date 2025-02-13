/*
 * @lc app=leetcode id=621 lang=javascript
 *
 * [621] Task Scheduler
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n == 0) return tasks.length;
  let taskCount = new Array(26).fill(0);
  for (let t of tasks) {
    let charindex = t.charCodeAt() - "A".charCodeAt();
    taskCount[charindex]++;
  }

  taskCount.sort((a, b) => b - a);

  let maxCount = taskCount[0]; // 最多的任务出现的次数
  let maxTasksNum = taskCount.filter((i) => i === maxCount).length; // 计算有多少个任务出现 maxCount 次

  let res = Math.max(tasks.length, (maxCount - 1) * (n + 1) + maxTasksNum);

  return res;
};
// @lc code=end
let tasks = ["A", "A", "A", "B", "B", "B"],
  n = 3;
console.log(leastInterval(tasks, n));
