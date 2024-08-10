class MyChainingHashMap {
  constructor(initCapacity = 4) {
    this.size = 0;
    this.table = new Array(initCapacity).fill(null).map(() => []);
    this.INIT_CAP = initCapacity;
  }

  // Hash function
  hash(key) {
    return (key.hashCode() & 0x7fffffff) % this.table.length;
  }

  // Add or update key-value pair
  put(key, value) {
    if (key == null) {
      throw new Error("key is null");
    }
    const list = this.table[this.hash(key)];
    for (let node of list) {
      if (node.key === key) {
        node.value = value;
        return;
      }
    }
    list.push({ key, value });
    this.size++;

    if (this.size >= this.table.length * 0.75) {
      this.resize(this.table.length * 2);
    }
  }

  // Remove key-value pair
  remove(key) {
    if (key == null) {
      throw new Error("key is null");
    }
    const list = this.table[this.hash(key)];
    for (let i = 0; i < list.length; i++) {
      if (list[i].key === key) {
        list.splice(i, 1);
        this.size--;

        if (this.size <= this.table.length / 8) {
          this.resize(Math.max(this.table.length / 2, this.INIT_CAP));
        }
        return;
      }
    }
  }

  // Get value by key
  get(key) {
    if (key == null) {
      throw new Error("key is null");
    }
    const list = this.table[this.hash(key)];
    for (let node of list) {
      if (node.key === key) {
        return node.value;
      }
    }
    return null;
  }

  // Get all keys
  keys() {
    const keys = [];
    for (let list of this.table) {
      for (let node of list) {
        keys.push(node.key);
      }
    }
    return keys;
  }

  // Resize the hash table
  resize(newCapacity) {
    const newMap = new MyChainingHashMap(newCapacity);
    for (let list of this.table) {
      for (let node of list) {
        newMap.put(node.key, node.value);
      }
    }
    this.table = newMap.table;
    this.size = newMap.size;
  }
}

// Extend the built-in prototype to provide a simple hash code function for demonstration purposes
Number.prototype.hashCode = function () {
  return this & 0xffffffff;
};

// Example usage
const map = new MyChainingHashMap();
map.put(1, 1);
map.put(2, 2);
map.put(3, 3);
console.log(map.get(1)); // 1
console.log(map.get(2)); // 2

map.put(1, 100);
console.log(map.get(1)); // 100

map.remove(2);
console.log(map.get(2)); // null

console.log(map.keys()); // [1, 3] (order may vary)
