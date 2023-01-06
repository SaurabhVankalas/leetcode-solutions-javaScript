// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

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
 var zigzagLevelOrder = function(root) {
	const ans = [];
	if (!root) return ans;
	const queue = [];
	root.level = 0;
	queue.push(root);
	while(queue.length) {
			const node = queue.pop(); 
			const level = node.level;
			if (ans.length === level) {
					ans.push([node.val]);
			} else {
					if (level % 2 === 1) {
							ans[level].unshift(node.val);
					} else {
							ans[level].push(node.val);
					}
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
	return ans;
};