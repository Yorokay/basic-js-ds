const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
	if (l.next === null) {
		return l;
	}

	let arrFromList = [];
	let currentNode = l;

	while (true) {
		arrFromList.push(currentNode.value);
		if (currentNode.next === null) {
			break;
		}
		currentNode = currentNode.next;
	}

	arrFromList = arrFromList
		.map(item => item === k ? null : item)
		.filter(item => item !== null);

	let sortedList;

	for (let i = arrFromList.length - 1; i >= 0; i--) {
		console.log(arrFromList[i]);
		let currentList = new ListNode(arrFromList[i]);

		if (i !== arrFromList.length - 1) {
			currentList.next = sortedList;
		}

		sortedList = currentList;
	}

	return sortedList;
}

module.exports = {
	removeKFromList
};

