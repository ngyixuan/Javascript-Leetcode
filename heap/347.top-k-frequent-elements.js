/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let frequencyMap = new Map();
  for (let n of nums) {
    frequencyMap.set(n, (frequencyMap.get(n) || 0) + 1);
  }

  let frequencyHeap = new priorityQueue();
  for (let item of frequencyMap.entries()) {
    frequencyHeap.push(item);
    if (frequencyHeap.queue.length > k) {
      frequencyHeap.pop();
    }
  }

  const res = [];
  for (let item of frequencyHeap.queue) {
    res.push(item[0]);
  }
  return res;
};

class priorityQueue {
  constructor() {
    this.queue = [];
  }

  push(item) {
    this.queue.push(item);
    let index = this.queue.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (parentIndex >= 0 && this.compareFn(parentIndex, index) > 0) {
      [this.queue[parentIndex], this.queue[index]] = [
        this.queue[index],
        this.queue[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
  pop() {
    let out = this.queue[0];
    this.queue[0] = this.queue.pop();
    let parent = 0;
    let children = 1;
    let searchChildren =
      this.compareFn(children, children + 1) > 0 ? children + 1 : children;

    while (this.compareFn(parent, searchChildren) > 0) {
      [this.queue[parent], this.queue[searchChildren]] = [
        this.queue[searchChildren],
        this.queue[parent],
      ];

      parent = searchChildren;
      children = parent * 2 + 1;
      searchChildren =
        this.compareFn(children, children + 1) > 0 ? children + 1 : children;
    }

    return out;
  }
  size() {
    return this.queue.length;
  }
  compareFn(parentIndex, currIndex) {
    if (this.queue[parentIndex] === undefined) return 1; // parentIndex 无效，currIndex 优先
    if (this.queue[currIndex] === undefined) return -1; // currIndex 无效，parentIndex 优先
    return this.queue[parentIndex][1] - this.queue[currIndex][1];
  }
}
// @lc code=end
let nums = [3, 0, 1, 0];
k = 1;
console.log(topKFrequent(nums, k));
