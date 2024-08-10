// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class MinHeap {
  constructor(comparator = (a, b) => a.val - b.val) {
    this.heap = [];
    this.comparator = comparator;
  }

  get size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.size - 1;
    const parent = (i) => Math.floor((i - 1) / 2);

    while (
      parent(index) >= 0 &&
      this.comparator(this.heap[parent(index)], this.heap[index]) > 0
    ) {
      this.swap(parent(index), index);
      index = parent(index);
    }
  }

  remove() {
    if (this.size === 0) return null;
    this.swap(0, this.size - 1);
    const value = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  bubbleDown(index = 0) {
    const left = (i) => 2 * i + 1;
    const right = (i) => 2 * i + 2;
    const getTopChild = (i) =>
      right(i) < this.size &&
      this.comparator(this.heap[right(i)], this.heap[left(i)]) < 0
        ? right(i)
        : left(i);

    while (left(index) < this.size) {
      const topChild = getTopChild(index);
      if (this.comparator(this.heap[index], this.heap[topChild]) <= 0) break;
      this.swap(index, topChild);
      index = topChild;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

var mergeKLists = function (lists) {
  let dummy = new ListNode(-1);
  let p = dummy;
  let priorityQueue = new MinHeap((a, b) => a.val - b.val);

  // Initialize the heap with the first node of each list
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] !== null) {
      priorityQueue.add(lists[i]);
    }
  }

  // Process the heap until it's empty
  while (!priorityQueue.isEmpty()) {
    let node = priorityQueue.remove();
    p.next = node;

    if (node.next !== null) {
      priorityQueue.add(node.next);
    }
    p = p.next;
  }

  return dummy.next;
};

// Example usage
let list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let list3 = new ListNode(2, new ListNode(6));
let lists = [list1, list2, list3];

let mergedList = mergeKLists(lists);
while (mergedList !== null) {
  console.log(mergedList.val);
  mergedList = mergedList.next;
}
