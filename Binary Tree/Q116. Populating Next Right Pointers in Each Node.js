// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

// Initially, all next pointers are set to NULL.

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
	if (!root) return null;
	const queue = [];
	root.level = 0;
	queue.push(root);
	let map = new Map();
	while (queue.length) {
			const node = queue.pop();
			const level = node.level;
			if (map.has(level)) {
					const prevNode = map.get(level);
					prevNode.next = node;
					map.set(level, node);
			} else {
					map.set(level, node);
			}
			if (node.right) {
					node.right.level = level + 1;
					queue.push(node.right);
			} 
			if (node.left) {
					node.left.level = level + 1;
					queue.push(node.left);
			}
	}
	return root;
};