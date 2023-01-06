// Given the root of a binary tree, return the maximum width of the given tree.

// The maximum width of a tree is the maximum width among all levels.

// The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.

// It is guaranteed that the answer will in the range of a 32-bit signed integer.

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
 * @return {number}
 */
 var widthOfBinaryTree = function(root) {
	let ans = 0;
	const queue = [];
	queue.push([root,0]);
	while (queue.length) {
			let size = queue.length;
			let minIdx = queue[size - 1][1];
			let first, last;
			for (let i=1;i<=size;i++) {
					let item = queue.pop();
					// console.log(item)
					let node = item[0];
					let idx = item[1] - minIdx;
					if (i===1) first = idx;
					if (i===size) last = idx;
					if (node.left) {
							queue.unshift([node.left, 2*idx+1]);
					}
					if (node.right) {
							queue.unshift([node.right, 2*idx+2]);
					}
			}
			// console.log(last, first)
			ans = Math.max(ans, last-first+1);
	}
	
	return ans;
};