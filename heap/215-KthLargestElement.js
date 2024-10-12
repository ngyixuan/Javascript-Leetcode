/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const minHeap = new MinHeap();
  for (let val of nums) {
    minHeap.add(val);
    if (minHeap.size() > k) {
      minHeap.poll();
    }
  }
  return minHeap.peek();
};

class MinHeap {
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
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.bubbleDown(0);
    }
    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      console.log(parentIndex);
      if (this.heap[parentIndex] > this.heap[index]) {
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
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = leftChildIndex;
      }

      console.log("index", index, "smallestChildIndex", smallestChildIndex);
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }
      console.log("index", index, "smallestChildIndex", smallestChildIndex);

      if (smallestChildIndex !== index) {
        this.swap(smallestChildIndex, index);
        index = smallestChildIndex;
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

let nums = [1, 2, 3];
let k = 2;
console.log(findKthLargest(nums, k));
