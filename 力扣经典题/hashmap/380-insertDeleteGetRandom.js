var RandomizedSet = function () {
  this.nums = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  else {
    this.map.set(val, this.nums.length);
    this.nums.push(val);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) {
    return false;
  }
  let index = this.map.get(val);
  this.map.set(this.nums[this.nums.length - 1], index);
  [this.nums[index], this.nums[this.nums.length - 1]] = [
    this.nums[this.nums.length - 1],
    this.nums[index],
  ];
  this.nums.pop();
  this.map.delete(val);

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let random = [Math.floor(Math.random() * this.nums.length)];
  return this.nums[random];
};

var obj = new RandomizedSet();
var param_1 = obj.insert(1);
var param_2 = obj.remove(2);
var param_3 = obj.insert(2);
var param_4 = obj.getRandom();
var param_5 = obj.remove(1);
var param_6 = obj.insert(2);
var param_7 = obj.getRandom();
console.log(param_1, param_2, param_3, param_4, param_5, param_6, param_7);
