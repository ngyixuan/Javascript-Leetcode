
var RandomizedSet = function() {
    this.map = new Map()
    this.array = []

};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.map.has(val)){
    return false

  }
  this.array.push(val)
  this.map.set(val,this.array.length-1)
  return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(!this.map.has(val)){
      return false
    }
    console.log(this.map)
    console.log(this.array)
    let index = this.map.get(val)
    let last = this.array[this.array.length-1]
    this.array[index] = last
    this.map.set(last, index)
    this.array.pop()
    this.map.delete(val)

    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIndex = Math.floor(Math.random()*this.array.length)
    return this.array[randomIndex]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet()
console.log(obj.remove(0))
console.log(obj.remove(0))
console.log(obj.insert(0))
console.log(obj.getRandom())
console.log(obj.remove(0))
console.log(obj.insert(0))
