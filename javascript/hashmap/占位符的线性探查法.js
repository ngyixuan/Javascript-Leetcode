class KVNode {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

class MyLinearProbingHashMap {
  constructor(initCapacity = 4) {
    this.DUMMY = new KVNode(null, null); // Placeholder for deleted nodes
    this.table = new Array(initCapacity).fill(null);
    this.size = 0;
    this.INIT_CAP = initCapacity;
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
    if (index !== -1) {
      // Key already exists, update the value
      this.table[index].val = val;
      return;
    }

    // Key doesn't exist, insert new node
    let x = new KVNode(key, val);
    index = this.hash(key);
    console.log("index", index);
    while (this.table[index] !== null && this.table[index] !== this.DUMMY) {
      index = (index + 1) % this.table.length;
    }
    this.table[index] = x;
    this.size++;
  }

  // Remove key-value pair
  remove(key) {
    if (key === null || key === undefined) {
      throw new Error("key is null");
    }

    // Resize down when load factor is less than 0.125
    if (this.size < this.table.length / 8) {
      this.resize(Math.max(this.table.length / 2, this.INIT_CAP));
    }

    let index = this.getKeyIndex(key);
    if (index === -1) {
      // Key doesn't exist, nothing to remove
      return;
    }

    // Mark the node as deleted
    this.table[index] = this.DUMMY;
    this.size--;
  }

  // Get value by key
  get(key) {
    if (key === null || key === undefined) {
      throw new Error("key is null");
    }

    let index = this.getKeyIndex(key);
    if (index === -1) {
      return null;
    }
    return this.table[index].val;
  }

  // Get all keys
  keys() {
    const keys = [];
    for (let entry of this.table) {
      if (entry !== null && entry !== this.DUMMY) {
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
    let step = 0;
    for (
      let i = this.hash(key);
      this.table[i] !== null;
      i = (i + 1) % this.table.length
    ) {
      let entry = this.table[i];
      if (entry === this.DUMMY) {
        continue;
      }
      if (entry.key === key) {
        return i;
      }
      step++;
      if (step === this.table.length) {
        this.resize(this.table.length); // Trigger a resize to clean up DUMMY entries
        return -1;
      }
    }
    return -1;
  }

  // Resize the hash table
  resize(cap) {
    let newMap = new MyLinearProbingHashMap(cap);
    for (let entry of this.table) {
      if (entry !== null && entry !== this.DUMMY) {
        newMap.put(entry.key, entry.val);
      }
    }
    this.table = newMap.table;
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
console.log(map);
// console.log(map.get(1)); // 1
// console.log(map.get(2)); // 2
// console.log(map.get(20)); // 20

// map.put(1, 100);
// console.log(map.get(1)); // 100

// map.remove(20);
// console.log(map.get(20)); // null
// console.log(map.get(30)); // 30
// console.log(map.keys()); // [1, 2, 10, 30, 3]
