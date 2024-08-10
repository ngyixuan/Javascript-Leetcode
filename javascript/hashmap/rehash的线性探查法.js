class KVNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

class MyLinearProbingHashMap {
  constructor(initCapacity = 4) {
    this.size = 0;
    this.INIT_CAP = initCapacity;
    this.table = new Array(initCapacity).fill(null);
  }

  // Hash function
  hash(key) {
    return (this.hashCode(key) & 0x7fffffff) % this.table.length;
  }

  hashCode(key) {
    if (typeof key === "number") {
      return key & 0xffffffff;
    } else if (typeof key === "string") {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    } else {
      throw new Error("Unsupported key type");
    }
  }

  // Add or update key-value pair
  put(key, val) {
    if (key === null || key === undefined) {
      throw new Error("key is null");
    }
    // Load factor of 0.75
    if (this.size >= this.table.length * 0.75) {
      this.resize(this.table.length * 2);
    }

    let index = this.getKeyIndex(key);
    // Key already exists, update the value
    if (this.table[index] !== null) {
      this.table[index].val = val;
      return;
    }

    // Key doesn't exist, insert new node
    this.table[index] = new KVNode(key, val);
    this.size++;
  }

  // Remove key-value pair
  remove(key) {
    if (key === null || key === undefined) {
      throw new Error("key is null");
    }

    // Resize down when load factor is less than 0.125
    if (this.size <= this.table.length / 8) {
      this.resize(Math.max(this.table.length / 2, this.INIT_CAP));
    }

    let index = this.getKeyIndex(key);

    if (this.table[index] === null) {
      // Key doesn't exist, nothing to remove
      return;
    }

    // Remove the node
    this.table[index] = null;
    this.size--;

    // Rehash the following nodes to maintain cluster
    index = (index + 1) % this.table.length;
    while (this.table[index] !== null) {
      let entry = this.table[index];
      this.table[index] = null;
      this.size--; // Decrement size because put will increment it
      this.put(entry.key, entry.val);
      index = (index + 1) % this.table.length;
    }
  }

  // Get value by key
  get(key) {
    if (key === null || key === undefined) {
      throw new Error("key is null");
    }
    let index = this.getKeyIndex(key);
    if (this.table[index] === null) {
      return null;
    }
    return this.table[index].val;
  }

  // Get all keys
  keys() {
    const keys = [];
    for (let entry of this.table) {
      if (entry !== null) {
        keys.push(entry.key);
      }
    }
    return keys;
  }

  // Get current size
  size() {
    return this.size;
  }

  // Get the index for the key, using linear probing
  getKeyIndex(key) {
    let index;
    for (
      index = this.hash(key);
      this.table[index] !== null;
      index = (index + 1) % this.table.length
    ) {
      if (this.table[index].key === key) {
        return index;
      }
    }
    return index;
  }

  // Resize the hash table
  resize(newCapacity) {
    const newMap = new MyLinearProbingHashMap(newCapacity);
    for (let entry of this.table) {
      if (entry !== null) {
        newMap.put(entry.key, entry.val);
      }
    }
    this.table = newMap.table;
    this.size = newMap.size;
  }
}

// Example usage
const map = new MyLinearProbingHashMap();
map.put(1, 1);
map.put(2, 2);
map.put(10, 10);
map.put(20, 20);
map.put(30, 30);
map.put(3, 3);
console.log(map.get(1)); // 1
console.log(map.get(2)); // 2
console.log(map.get(20)); // 20

map.put(1, 100);
console.log(map.get(1)); // 100

map.remove(20);
console.log(map.get(20)); // null
console.log(map.get(30)); // 30
console.log(map.keys()); // [1, 2, 10, 30, 3]
