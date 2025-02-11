/*
 * @lc app=leetcode id=239 lang=javascript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  class MonoticQueue {
    constructor() {
      this.q = [];
    }

    push(n) {
      while (this.q.length > 0 && this.q[this.q.length - 1] < n) {
        this.q.pop();
      }
      this.q.push(n);
    }
    max() {
      return this.q[0];
    }

    pop(n) {
      if (n == this.q[0]) {
        this.q.shift();
      }
    }
  }

  let monoticQueue = new MonoticQueue();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      monoticQueue.push(nums[i]);
    } else {
      monoticQueue.push(nums[i]);
      //   console.log(monoticQueue.q);
      res.push(monoticQueue.q[0]);
      monoticQueue.pop(nums[i - k + 1]);
    }
  }

  return res;
};
// @lc code=end
let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(maxSlidingWindow(nums, k));
