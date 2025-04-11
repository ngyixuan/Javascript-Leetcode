/*
 * @lc app=leetcode id=378 lang=javascript
 *
 * [378] Kth Smallest Element in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  add(val) {
    this.heap.push(val);
    this.bubbleUp(this.heap.length - 1);
  }
  poll() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return min;
  }
  peek() {
    return this.heap[0];
  }
  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].val > this.heap[index].val) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    while (index < this.heap.length) {
      let smallestChildIndex = index;
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[smallestChildIndex].val > this.heap[leftChildIndex].val
      ) {
        smallestChildIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[smallestChildIndex].val > this.heap[rightChildIndex].val
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (smallestChildIndex != index) {
        this.swap(smallestChildIndex, index);
        index = smallestChildIndex;
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

var kthSmallest = function (matrix, k) {
  let minHeap = new MinHeap();

  for (let i = 0; i < matrix.length; i++) {
    minHeap.add({ val: matrix[i][0], row: i, col: 0 });
  }
  let res = null;
  for (let i = 0; i < k; i++) {
    let { val, row, col } = minHeap.poll();
    console.log(row, col, val);
    res = val;
    if (col + 1 < matrix[0].length) {
      minHeap.add({ val: matrix[row][col + 1], row: row, col: col + 1 });
    }
  }

  return res;
};
// @lc code=end
let matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15],
  ],
  k = 8;
console.log(kthSmallest(matrix, k));
