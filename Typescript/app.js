var Counter = /** @class */ (function () {
    function Counter() {
        this.count = 0;
    }
    Counter.prototype.increment = function () {
        this.count++;
    };
    Counter.prototype.decrement = function () {
        if (this.count > 0) {
            this.count--;
        }
    };
    Counter.prototype.reset = function () {
        this.count = 0;
    };
    Counter.prototype.getCount = function () {
        return this.count;
    };
    return Counter;
}());
// Example usage:
var myCounter = new Counter();
myCounter.increment(); // Increment the counter
console.log(myCounter.getCount()); // Output: 1
myCounter.decrement(); // Decrement the counter
console.log(myCounter.getCount()); // Output: 0
myCounter.reset(); // Reset the counter
console.log(myCounter.getCount()); // Output: 0
