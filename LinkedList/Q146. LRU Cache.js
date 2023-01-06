// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

class Node {
	constructor(key, value) {
			this.key = key;
			this.value = value;
			this.next = null;
			this.prev = null;
	}
}

/**
* @param {number} capacity
*/
var LRUCache = function(capacity) {
	this.map = new Map();
	this.head = new Node(0,0);
	this.tail = new Node(0,0);
	this.head.next = this.tail;
	this.tail.prev = this.head;
	this.capacity = capacity;
	return null;
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
	let map = this.map;
	// console.log(map, map.has(key))
	if (map.has(key) === true) {
			const node = map.get(key);
			if (node.prev !== this.head) {
					node.prev.next = node.next;
					node.next.prev = node.prev;
					node.next = this.head.next;
					node.prev = this.head;
					node.next.prev = node;
					this.head.next = node;
					map.set(key, node);
			}
			return map.get(key).value;
	} else {
			return -1;
	}
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
	let map = this.map;
	let capacity = this.capacity;
	// console.log(this.head)
	if (map.has(key) === true) {
			const node = map.get(key);
			if (node.prev !== this.head) {
					node.prev.next = node.next;
					node.next.prev = node.prev;
					node.next = this.head.next;
					node.prev = this.head;
					node.value = value;
					node.next.prev = node;
					this.head.next = node;
					map.set(key, node);
			} else {
					node.value = value;
					map.set(key, node);
			}
	} else {
			if (capacity > 0) {
					this.capacity--;
					const node = new Node(key, value);
					node.next = this.head.next;
					node.prev = this.head;
					node.next.prev = node;
					this.head.next = node;
					map.set(key, node);
			} else {
					const lruNode = this.tail.prev;
					this.tail.prev = lruNode.prev;
					lruNode.prev.next = this.tail;
					map.delete(lruNode.key);
					const node = new Node(key, value);
					node.next = this.head.next;
					node.prev = this.head;
					this.head.next = node;
					node.next.prev = node;
					map.set(key, node);
			}
	}
	
	return null;
	// console.log(map, queue)
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/