// Design and implement a data structure for a Least Frequently Used (LFU) cache.

// Implement the LFUCache class:

// LFUCache(int capacity) Initializes the object with the capacity of the data structure.
// int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.
// void put(int key, int value) Update the value of the key if present, or inserts the key if not already present. When the cache reaches its capacity, it should invalidate and remove the least frequently used key before inserting a new item. For this problem, when there is a tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.
// To determine the least frequently used key, a use counter is maintained for each key in the cache. The key with the smallest use counter is the least frequently used key.

// When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation). The use counter for a key in the cache is incremented either a get or put operation is called on it.

// The functions get and put must each run in O(1) average time complexity.

class Node {
	constructor(key, val) {
			this.freq = 1;
			this.key = key;
			this.val = val;
			this.prev = null;
			this.next = null;
	}
}

function List() {
	this.head = new Node(0,0);
	this.tail = new Node(0,0);
	this.head.next = this.tail;
	this.tail.prev = this.head;
	this.size = 0;

	this.addFront = (node) => {
			node.next = this.head.next;
			node.prev = this.head;
			node.next.prev = node;
			this.head.next = node;
			this.size++;
	};

	this.removeNode = (node) => {
			node.prev.next = node.next;
			node.next.prev = node.prev;
			this.size--;
	};
}

/**
* @param {number} capacity
*/
var LFUCache = function(capacity) {
	this.limit = capacity;
	this.minFreq = null;
	this.map = new Map();
	this.freqMap = new Map();
};

/** 
* @param {number} key
* @return {number}
*/
LFUCache.prototype.get = function(key) {
	// console.log(this.freqMap, this.map);
	if (this.map.has(key) === true) {
			const node = this.map.get(key);
			const freqList = this.freqMap.get(node.freq);
			freqList.removeNode(node);
			
			if (freqList.size === 0) {
					if (this.minFreq === node.freq) this.minFreq = node.freq + 1;
					this.freqMap.delete(node.freq);
			} 
			node.freq++;
			if (this.freqMap.has(node.freq) === true) {
					const lis = this.freqMap.get(node.freq);
					lis.addFront(node);
					this.freqMap.set(node.freq, lis);
			} else {
					const lis = new List();
					lis.addFront(node);
					this.freqMap.set(node.freq, lis);
			}
			this.map.set(key, node);
			return node.val;
	} else {
			return -1;
	}
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LFUCache.prototype.put = function(key, value) {
	// console.log(this.head);
	if (this.map.has(key) === true) {
			const node = this.map.get(key);
			node.val = value;
			this.get(key);
	} else {
			const node = new Node(key, value);
			if (this.limit === 0) {
					if (this.minFreq === null) return null;
					const minFreqList = this.freqMap.get(this.minFreq);
					const lastNode = minFreqList.tail.prev;
					this.map.delete(lastNode.key);
					minFreqList.removeNode(lastNode);
					if (minFreqList.size === 0) {
							// this.minFreq = node.freq + 1;
							this.freqMap.delete(this.minFreq);
					}
					if (this.freqMap.has(1) === true) {
							const lis = this.freqMap.get(1);
							lis.addFront(node);
					} else {
							const lis = new List();
							lis.addFront(node);
							this.freqMap.set(node.freq, lis);
					}
					this.map.set(key, node);
					this.minFreq = 1;
			} else {
					this.limit--;
					if (this.freqMap.has(1) === true) {
							const lis = this.freqMap.get(1);
							lis.addFront(node);
					} else {
							const lis = new List();
							lis.addFront(node);
							this.freqMap.set(node.freq, lis);
					}
					this.minFreq = 1;
					this.map.set(key, node);
			}
	}
	
	return null;
};

/** 
* Your LFUCache object will be instantiated and called as such:
* var obj = new LFUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/