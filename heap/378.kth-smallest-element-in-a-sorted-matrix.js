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
var kthSmallest = function (matrix, k) {
  let pq = new minHeap();
  for (let i = 0; i < matrix.length; i++) {
    pq.push({ val: matrix[i][0], row: i, col: 0 });
  }
  console.log(pq.heap);
  let res = null;
  for (let i = 0; i < k; i++) {
    let item = pq.poll();

    res = item.val;
    if (item.col + 1 < matrix[item.row].length) {
      pq.push({
        val: matrix[item.row][item.col + 1],
        row: item.row,
        col: item.col + 1,
      });
    }
    console.log(pq.heap);
  }

  return res;
};

class minHeap {
  constructor() {
    this.heap = [];
  }
  push(item) {
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }
  poll() {
    let min = this.heap[0];
    let max = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = max;
      this.bubbleDown(0);
    }
    return min;
  }
  peek() {
    return this.heap[0];
  }
  bubbleDown(index) {
    while (index < this.heap.length) {
      let smalletChildIndex = index;
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex].val < this.heap[smalletChildIndex].val
      ) {
        [this.heap[leftChildIndex], this.heap[smalletChildIndex]] = [
          this.heap[smalletChildIndex],
          this.heap[leftChildIndex],
        ];
        smalletChildIndex = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].val < this.heap[smalletChildIndex].val
      ) {
        [this.heap[rightChildIndex], this.heap[smalletChildIndex]] = [
          this.heap[smalletChildIndex],
          this.heap[rightChildIndex],
        ];
        smalletChildIndex = rightChildIndex;
      }

      if (index !== smalletChildIndex) {
        [this.heap[index], this.heap[smalletChildIndex]] = [
          this.heap[index],
          this.heap[smalletChildIndex],
        ];
        index = smalletChildIndex;
      } else {
        break;
      }
    }
  }
  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].val > this.heap[index].val) {
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }
}

let matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];
let k = 8;
console.log(kthSmallest(matrix, k));
// @lc code=end
