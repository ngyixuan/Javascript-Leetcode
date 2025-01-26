/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let minheap = new minHeap();
  for (let item of nums) {
    minheap.add(item);
    if (minheap.size() > k) {
      minheap.poll();
    }
  }
  return minheap.peek();
};

class minHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  poll() {
    let min = this.heap[0];
    let last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentindex = Math.floor((index - 1) / 2);
      if (this.heap[parentindex] > this.heap[index]) {
        this.swap(parentindex, index);
        index = parentindex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    while (index < this.heap.length) {
      let smallestIndex = index;
      let leftChildIndex = smallestIndex * 2 + 1;
      let rightChildIndex = smallestIndex * 2 + 2;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[smallestIndex] > this.heap[leftChildIndex]
      ) {
        smallestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[smallestIndex] > this.heap[rightChildIndex]
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex !== index) {
        this.swap(smallestIndex, index);
        index = smallestIndex;
      } else {
        break;
      }
    }
  }

  swap(idx1, idx2) {
    let temp = this.heap[idx1];
    this.heap[idx1] = this.heap[idx2];
    this.heap[idx2] = temp;
  }
}
// @lc code=end
