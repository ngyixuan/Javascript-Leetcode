var RandomizedSet = function () {
  this.set = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.set.has(val)) {
    return false;
  }
  this.set.add(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.set.has(val)) {
    this.set.delete(val);
    return true;
  }
  return false;
};
/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let items = Array.from(this.set);
  return items[Math.floor(Math.random() * items.length)];
};

// Your RandomizedSet object will be instantiated and called as such:
var obj = new RandomizedSet();
var param_1 = obj.insert(1);
var param_1 = obj.insert(1);
var param_1 = obj.insert(6);
var param_1 = obj.insert(9);
var param_2 = obj.remove(6);
var param_3 = obj.getRandom();

console.log(obj);
console.log(param_3);
