// Given a reference of a node in a connected undirected graph.

// Return a deep copy (clone) of the graph.

// Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
 

// Test case format:

// For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

// An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

// The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 var cloneGraph = function(node) {
	const queue = [node];
	const neighborMap = new Map();
	const originalMap = new Map();
	while(queue.length) {
			const nd = queue.pop();
			if (!nd) break;
			if (originalMap.has(nd.val) === false) {
					originalMap.set(nd.val, nd);
					const n = new Node(nd.val);
					neighborMap.set(nd.val, n);
	
					for (let i=0;i<nd.neighbors.length;i++) {
							const j = nd.neighbors[i];
							if (originalMap.has(j.val) === false) queue.push(j);
					}
			}
	} 
	for (let i=1;i<=neighborMap.size;i++) {
			const originalNode = originalMap.get(i);
			const copyNode = neighborMap.get(i);
			for (let j of originalNode.neighbors) {
					copyNode.neighbors.push(neighborMap.get(j.val));
			}
	}
	return neighborMap.get(1);
};