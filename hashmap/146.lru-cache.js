/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cap = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;
  this.makeRecently(key);
  return this.cache.get(key);
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.makeRecently(key);
    this.cache.set(key, value);

    return;
  }
  if (this.cache.size >= this.cap) {
    const oldestKey = this.cache.keys().next().value;
    this.cache.delete(oldestKey);
  }

  this.cache.set(key, value);
};

LRUCache.prototype.makeRecently = function (key) {
  let val = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, val);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

let obj = new LRUCache(2);
let param1 = obj.put(1, 1);
let param2 = obj.put(2, 2);

console.log(obj.get(1));
let param3 = obj.put(3, 3);
console.log(obj.get(2));
