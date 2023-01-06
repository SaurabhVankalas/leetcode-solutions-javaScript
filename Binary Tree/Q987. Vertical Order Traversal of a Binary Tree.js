// Given the root of a binary tree, calculate the vertical order traversal of the binary tree.

// For each node at position (row, col), its left and right children will be at positions (row + 1, col - 1) and (row + 1, col + 1) respectively. The root of the tree is at (0, 0).

// The vertical order traversal of a binary tree is a list of top-to-bottom orderings for each column index starting from the leftmost column and ending on the rightmost column. There may be multiple nodes in the same row and same column. In such a case, sort these nodes by their values.

// Return the vertical order traversal of the binary tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var verticalTraversal = function(root) {
	const obj = {};
	const queue = [];
	root.hd = 0;
	root.level = 0;
	queue.push(root);
	while(queue.length) {
			const node = queue.pop();
			const hd = node.hd;
			const level = node.level;
			if (hd in obj) {
					if (level in obj[hd]) {
							obj[hd][level].push(node.val);
					} else {
							obj[hd][level] = [node.val];
					}
			} else {
					obj[hd] = {};
					if (level in obj[hd]) {
							obj[hd][level].push(node.val);
					} else {
							obj[hd][level] = [node.val];
					}
			}
			if (node.left) {
					node.left.hd = hd - 1;
					node.left.level = level + 1;
					queue.unshift(node.left);
			}
			if (node.right) {
					node.right.hd = hd + 1;
					node.right.level = level + 1;
					queue.unshift(node.right);
			}
	}
	
	// console.log(obj);
	const left = [];
	const right = [];
	let i = 0;
	while(i in obj) {
			// obj[i].sort();
			const levels = obj[i];
			let map = [];
			for (let level in levels) {
					const values = levels[level].sort((a,b) => a - b);
					map = [...map, ...values];
			}
			right.push(map);
			i++;
	}
	i = -1;
	while(i in obj) {
			// obj[i].sort();
			const levels = obj[i];
			let map = [];
			for (let level in levels) {
					const values = levels[level].sort((a,b) => a - b);
					map = [...map, ...values];
			}
			left.push(map);
			i--;
	}
	left.reverse();
	
	return [...left, ...right];
};