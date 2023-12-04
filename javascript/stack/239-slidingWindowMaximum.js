/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class MonoQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(val) {
    let back = this.queue[this.queue.length - 1];
    while (this.queue.length > 0 && back < val) {
      this.queue.pop();
      back = this.queue[this.queue.length - 1];
    }
    this.queue.push(val);
  }

  dequeue(val) {
    front = this.front();
    if (front == val) {
      this.queue.shift();
    }
  }

  front() {
    return this.queue[0];
  }
}
var maxSlidingWindow = function (nums, k) {
  const monoqueue = new MonoQueue();
  //   运用双指针固定k的范围
  let right = 0;
  let left = 0;
  let res = [];

  if (nums.length < k) {
    return nums;
  }
  // 先把第一组最大的数值先推入数组
  while (right < k) {
    monoqueue.enqueue(nums[right]);
    right++;
  }
  front = monoqueue.front();
  res.push(front);
  // 接下来开始每次向后推一位
  while (right < nums.length) {
    // 把上一组最大的去除掉，防止下一组最大的不在单调队列的出口端
    monoqueue.dequeue(nums[left]);
    // 这里是比较k个元素最大的数值放入单调队列
    monoqueue.enqueue(nums[right]);

    front = monoqueue.front();
    res.push(front);
    right++;
    left++;
  }
  //   console.log(res);
  return res;
};

nums = [1, 3, 3, -3, 5, 3, 6, 7];
// nums = [1, -1];
k = 3;
maxSlidingWindow(nums, k);
