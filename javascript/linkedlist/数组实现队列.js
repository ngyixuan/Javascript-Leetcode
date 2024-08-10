class queue {
  constructor() {
    this.items = [];
  }

  enqueue(val) {
    this.items.push(val);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getSize() {
    return this.items.length;
  }
}
