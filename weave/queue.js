// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(element) {
    this.data.unshift(element);
    return this.data;
  }

  remove() {
    return this.data.pop();
  }

  find(i) {
    return this.data[i - 1];
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

export default Queue;
