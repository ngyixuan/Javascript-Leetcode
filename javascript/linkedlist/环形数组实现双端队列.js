class circularArray {
  constructor() {
    this.size = 1;
    this.arr = new Array(this.size);
    this.start = 0;
    this.end = 0;
    this.count = 0;
  }

  resize(newSize) {
    const newArr = new Array(newSize);
    for (let i = 0; i < this.count; i++) {
      newArr[i] = this.arr[(this.start + i) % this.size];
    }
    this.arr = newArr;
    this.start = 0;
    this.end = this.count;
    this.size = newSize;
  }

  addFirst(val) {
    if (this.isFull()) {
      this.resize(this.size * 2);
    }
    this.start = (this.start - 1 + this.size) % this.size;
    this.arr[this.start] = val;
    this.count++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      throw Error("Empty Array");
    }
    this.arr[this.start] = null;
    this.start = (this.start + 1) % this.size;
    this.count--;
    if (this.count > 0 && this.count == this.size / 4) {
      this.resize(this.size / 2);
    }
  }

  addLast(val) {
    if (this.isFull()) {
      this.resize(this.size * 2);
    }

    this.arr[this.end] = val;
    this.end = (this.end + 1) % this.size;
    this.count++;
  }

  removeLast() {
    if (this.isEmpty()) {
      throw Error("Array is Empty");
    }
    this.end = (this.end - 1 + this.size) % this.size;
    this.arr[this.end] = null;
    this.count--;

    if (this.count > 0 && this.count == this.size / 4) {
      this.resize(this.size / 4);
    }
  }

  getFirst() {
    if (this.isEmpty()) {
      throw Error("Array is Empty");
    }
    return this.arr[this.start];
  }

  getLast() {
    if (this.isEmpty()) {
      throw Error("Array is Empty");
    }
    return this.arr[(this.end - 1 + this.size) % this.size];
  }

  isFull() {
    return this.count == this.size;
  }

  isEmpty() {
    return this.count == 0;
  }
  getSize() {
    return this.count;
  }
}
class dequeueArray {
  constructor() {
    this.dequeueArr = new circularArray();
  }

  addFirst(val) {
    this.dequeueArr.addFirst(val);
  }

  addLast(val) {
    this.dequeueArr.addLast(val);
  }

  removeFirst() {
    return this.dequeueArr.removeFirst();
  }

  removeLast() {
    return this.dequeueArr.removeLast();
  }
  peekFirst() {
    return this.dequeueArr.getFirst();
  }
  peekLast() {
    return this.dequeueArr.getLast();
  }
}

let dequeueArr = new dequeueArray();
dequeueArr.addLast(1);
dequeueArr.addLast(2);
console.log(dequeueArr.peekLast());
