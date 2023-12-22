const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor() {
		this.arr = [];
	}

	getUnderlyingList() {
		let originalQueue;

		for (let i = this.arr.length - 1; i >= 0; i--) {
			let currentNode = new ListNode(this.arr[i]);

			if (i !== this.arr.length - 1) {
				currentNode.next = originalQueue;
			}

			originalQueue = currentNode;
		}

		return originalQueue;
	}

	enqueue(value) {
		this.arr.push(value);
	}

	dequeue() {
		return this.arr.shift();
	}
}

module.exports = {
	Queue
};

let queue = new Queue();

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)

// console.log(queue.getUnderlyingList())
// queue.dequeue();
// console.log(queue.arr)

// console.log(queue.dequeue());