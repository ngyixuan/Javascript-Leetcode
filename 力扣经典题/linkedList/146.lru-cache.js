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
  else {
    this.makeRecent(key);
    return this.cache.get(key);
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.makeRecent(key);
    this.cache.set(key, value);
    return;
  }
  if (this.cache.size >= this.cap) {
    let oldestKey = this.cache.keys().next().value;
    this.cache.delete(oldestKey);
  }
  this.cache.set(key, value);
};

LRUCache.prototype.makeRecent = function (key) {
  let recent = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, recent);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
let LRU = new LRUCache(2);
LRU.put(1, 1);
LRU.put(2, 2);
console.log(LRU.get(1));
LRU.put(3, 3);
console.log(LRU.get(2));
LRU.put(4, 4);
console.log(LRU.get(1));
console.log(LRU.get(3));
console.log(LRU.get(4));
