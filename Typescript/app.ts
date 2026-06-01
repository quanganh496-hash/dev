class Counter {
  private count: number;

  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }

  reset() {
    this.count = 0;
  }

  getCount() {
    return this.count;
  }
}

// Example usage:
const myCounter = new Counter();

myCounter.increment(); // Increment the counter
console.log(myCounter.getCount()); // Output: 1

myCounter.decrement(); // Decrement the counter
console.log(myCounter.getCount()); // Output: 0

myCounter.reset(); // Reset the counter
console.log(myCounter.getCount()); // Output: 0
