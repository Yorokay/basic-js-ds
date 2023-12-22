const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {

	constructor() {
		this.tree = new Node(null);
		this.currentNode = this.tree;
		this.preventNode = null;
	}

	root() {

		return this.tree.data === null ?
			null : this.tree;
	}

	add(data) {
		let newNode = new Node(data);

		if (this.tree.data === null) {
			this.tree = newNode;
			this.currentNode = this.tree;
		}
		else if (this.currentNode.left === null && data < this.currentNode.data) {
			this.currentNode.left = newNode;
			this.currentNode = this.tree;
		}
		else if (this.currentNode.right === null && data > this.currentNode.data) {
			this.currentNode.right = newNode;
			this.currentNode = this.tree;
		}
		else {
			if (data < this.currentNode.data) {
				this.currentNode = this.currentNode.left;
				this.add(data);
			}
			else if (data > this.currentNode.data) {
				this.currentNode = this.currentNode.right;
				this.add(data);
			}
		}
	}

	has(data) {
		let hasNode = this.find(data);
		return hasNode === null ? false : true;
	}

	find(data) {
		let foundNode = null;

		if (this.currentNode.data === data) {
			foundNode = this.currentNode;
		}
		else {
			if (data < this.currentNode.data && this.currentNode.left !== null) {
				this.preventNode = this.currentNode;
				this.currentNode = this.currentNode.left;
				foundNode = this.find(data);
			}
			else if (data > this.currentNode.data && this.currentNode.right !== null) {
				this.preventNode = this.currentNode;
				this.currentNode = this.currentNode.right;
				foundNode = this.find(data);
			}
		}

		this.currentNode = this.tree;
		return foundNode;
	}

	remove(data) {
		let removeNode = this.find(data);
		let minMaxNode;
		let minMaxPreventNode = removeNode;

		if (removeNode.left === null && removeNode.right === null) {

			if (removeNode === this.tree) {
				this.tree.data = null;
			}
			else if (removeNode.data < this.preventNode.data) {
				this.preventNode.left = null;
			}
			else {
				this.preventNode.right = null;
			}
		}
		else if (removeNode.left !== null) {
			minMaxNode = removeNode.left;

			while (minMaxNode.right !== null) {
				minMaxPreventNode = minMaxNode;
				minMaxNode = minMaxNode.right;
			}

			if (minMaxPreventNode === removeNode) {

				if (minMaxNode.left === null) {
					minMaxPreventNode.left = null
				} else {
					minMaxPreventNode.left = minMaxNode.left;
				}
			}
			else {

				if (minMaxNode.left === null) {
					minMaxPreventNode.right = null
				} else {
					minMaxPreventNode.right = minMaxNode.left;
				}
			}

			removeNode.data = minMaxNode.data;
		}
		else {
			minMaxNode = removeNode.right;

			while (minMaxNode.left !== null) {
				minMaxPreventNode = minMaxNode;
				minMaxNode = minMaxNode.left;
			}

			if (minMaxPreventNode === removeNode) {

				if (minMaxNode.right === null) {
					minMaxPreventNode.right = null
				} else {
					minMaxPreventNode.right = minMaxNode.right;
				}
			}
			else {

				if (minMaxNode.right === null) {
					minMaxPreventNode.left = null
				} else {
					minMaxPreventNode.left = minMaxNode.right;
				}
			}

			removeNode.data = minMaxNode.data;
		}
		this.preventNode = null;
	}

	min() {
		let minNode;

		if (this.tree.data === null) {
			return null;
		}
		else if (this.currentNode.left === null) {
			minNode = this.currentNode.data;
			this.currentNode = this.tree;
			return minNode;
		}
		else {
			this.currentNode = this.currentNode.left;
			minNode = this.min();
			this.currentNode = this.tree;
			return minNode;
		}
	}

	max() {
		let maxNode;

		if (this.tree.data === null) {
			return null;
		}
		else if (this.currentNode.right === null) {
			maxNode = this.currentNode.data;
			this.currentNode = this.tree;
			return maxNode;
		}
		else {
			this.currentNode = this.currentNode.right;
			maxNode = this.max();
			this.currentNode = this.tree;
			return maxNode;
		}
	}
}

module.exports = {
	BinarySearchTree
};

