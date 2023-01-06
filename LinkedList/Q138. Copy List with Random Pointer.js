// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.

 // Definition for a Node.
 function Node(val, next, random) {
	this.val = val;
	this.next = next || null;
	this.random = random || null;
};


/**
* @param {Node} head
* @return {Node}
*/
var copyRandomList = function(head) {
	if (!head) return null;
	let curr = head;
	let newNode = new Node(0);
	let prev = null;
	let res = newNode;
	//console.log(res)
	let c = 0;
	const map = new Map();
	const newMap = new Map();
	while(curr) {
			map.set(curr, c);
			newNode.next = new Node(curr.val);
			newNode = newNode.next;
			curr = curr.next;
			if (!prev) prev = newNode;
			else prev.next = newNode, prev = prev.next;
			c++;
	}
	
	curr = head;
	let curr1 = res.next;
	let j = 0;
	while(curr1) {
			newMap.set(j, curr1);
			curr1 = curr1.next;
			j++;
	}
	curr1 = res.next;
	// console.log(curr1);
	for (let i=0;i<c;i++) {
			if (curr.random) {
					const idx = map.get(curr.random);
					curr1.random = newMap.get(idx);
			}
			curr = curr.next;
			curr1 = curr1.next;
	}
	// console.log(res.next);
	return res.next;
};