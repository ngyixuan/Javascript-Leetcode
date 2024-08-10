class stack {
  constructor() {
    this.arr = new Array();
  }

  push(val) {
    this.arr.push(val);
  }

  pop() {
    this.arr.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
    return this.arr.length === 0;
  }

  getSize() {
    return this.arr.length;
  }
}
