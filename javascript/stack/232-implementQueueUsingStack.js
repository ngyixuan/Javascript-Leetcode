var MyQueue = function () {
  this.stackIn = [];
  this.stackOut = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stackIn.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stackOut.length) {
    return this.stackOut.pop();
  }
  while (this.stackIn.length) {
    this.stackOut.push(this.stackIn.pop());
  }

  return this.stackOut.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  const peek = this.pop();
  this.stackOut.push(peek);

  return peek;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  if (this.stackIn.length || this.stackOut.length) {
    return false;
  }
  return true;
};

var obj = new MyQueue();
obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);
var param2 = obj.pop();
obj.push(5);
var param3 = obj.pop();
var param4 = obj.pop();
var param5 = obj.pop();
var param6 = obj.pop();

console.log(param2);
console.log(param3);
console.log(param4);
console.log(param5);
console.log(param6);
