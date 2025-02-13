/*
 * @lc app=leetcode id=622 lang=javascript
 *
 * [622] Design Circular Queue
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.capacity = k + 1;
  this.queue = new Array(k + 1).fill(0);
  this.front = 0;
  this.rear = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) return false;
  this.queue[this.rear] = value;
  this.rear = (this.rear + 1) % this.capacity;

  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) return false;
  this.front = (this.front + 1) % this.capacity;

  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.isEmpty()) return -1;
  return this.queue[this.front];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.isEmpty()) return -1;
  return this.queue[(this.rear - 1 + this.capacity) % this.capacity];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.rear === this.front;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return (this.rear + 1) % this.capacity === this.front;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

var obj = new MyCircularQueue(3);
var param_1 = obj.enQueue(1);
var param_2 = obj.enQueue(2);
var param_3 = obj.enQueue(3);
var param_4 = obj.enQueue(4);
var param_5 = obj.Rear();
var param_6 = obj.isFull();
var param_7 = obj.deQueue();
var param_8 = obj.enQueue(4);
var param_9 = obj.Rear();

console.log(param_1);
console.log(param_2);
console.log(param_3);
console.log(param_4);
console.log(param_5);
console.log(param_6);
console.log(param_7);
console.log(param_8);
console.log(param_9);
