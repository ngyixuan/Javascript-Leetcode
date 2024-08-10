class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkList {
  constructor() {
    this.head = new ListNode(null);
    this.tail = this.head;
    this.size = 0;
  }

  addFirst(data) {
    let newNode = new ListNode(data);
    newNode.next = this.head.next;
    this.head.next = newNode;
    if (this.size == 0) {
      this.tail = newNode;
    }
    this.size++;
  }

  addLast(data) {
    let newNode = new ListNode(data);
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }
  add(index, data) {
    if (index < 0 || index > this.size) {
      throw Error;
    }
    if (index == this.size) {
      this.addLast(data);
      return;
    }
    let prev = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    let newNode = new ListNode(data);
    newNode.next = prev.next;
    prev.next = newNode;
    this.size++;
  }

  removeFirst() {
    if (this.size == 0) {
      return;
    }
    let first = this.head.next;
    this.head.next = first.next;
    if (this.size == 1) {
      this.tail = this.head;
    }
    this.size--;
    return first.data;
  }

  removeLast() {
    if (this.size == 0) {
      return;
    }
    let prev = this.head;
    while (prev.next != this.tail) {
      prev = prev.next;
    }
    let last = this.tail;
    this.tail = prev;
    prev.next = null;
    this.size--;
    return last.data;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      throw Error;
    }
    let prev = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    let nodeToRemove = prev.next;
    prev.next = nodeToRemove.next;
    if (index == this.size - 1) {
      this.tail = prev;
    }
    this.size--;
    return nodeToRemove.data;
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw Error;
    }
    let node = this.getNode(index);
    return node.data;
  }

  getFirst() {
    if (this.size == 0) {
      return;
    }
    return this.head.next.data;
  }

  getLast() {
    if (this.size == 0) {
      return;
    }
    return this.getNode(this.size - 1).data;
  }

  getNode(index) {
    let curr = this.head.next;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr;
  }

  set(index, data) {
    if (index < 0 || index >= this.size) {
      throw Error;
    }
    let p = this.getNode(index);
    p.data = data;
  }
  getSize() {
    return this.size;
  }
}

let linklist = new SingleLinkList();
linklist.addFirst(1);
linklist.add(1, 2);
