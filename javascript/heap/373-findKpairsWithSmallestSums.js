/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const heap = new MinHeap();
  let pairs = [];
  for (let i = 0; i < Math.min(k, nums2.length); i++) {
    heap.add([nums1[0] + nums2[i], 0, i]);
  }

  while (k > 0 && heap.size() > 0) {
    const [sum, i, j] = heap.poll();
    pairs.push([nums1[i], nums2[j]]);
    k--;
    if (i + 1 < nums1.length) {
      heap.add([nums1[i + 1] + nums2[j], i + 1, j]);
    }
  }
  return pairs;
};

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
      if (this.heap[parentIndex][0] > this.heap[index][0]) {
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
        this.heap[smallestChildIndex][0] > this.heap[leftChildIndex][0]
      ) {
        smallestChildIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.heap[smallestChildIndex][0] > this.heap[rightChildIndex][0]
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

let nums1 = [1, 1, 2];
let nums2 = [1, 2, 3];
let k = 6;

console.log(kSmallestPairs(nums1, nums2, k));
