var MyStack = function () {
  this.queue1 = [];
  this.queue2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (!this.queue1.length) {
    [this.queue2, this.queue1] = [this.queue1, this.queue2];
  }
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  return this.queue1.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  top = this.pop();
  this.queue2.push(top);
  return top;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.queue1.length && !this.queue2.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var obj = new MyStack();
obj.push(1);
obj.push(2);
var param_2 = obj.pop();
obj.push(3);

var param_3 = obj.top();
obj.push(4);
obj.push(5);
var param_4 = obj.pop();

var param_5 = obj.empty();

console.log(param_2);
console.log(param_3);
console.log(param_4);
