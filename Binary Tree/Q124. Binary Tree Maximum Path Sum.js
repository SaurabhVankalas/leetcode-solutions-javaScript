// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

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
 var maxPathSum = function(root) {
	let maxi = -1000;
	const recursion = (root) => {
			if (!root) return 0;
			let leftSum = recursion(root.left, maxi);
			let rightSum = recursion(root.right, maxi);

			if (leftSum < 0) leftSum = 0;
			if (rightSum < 0) rightSum = 0;
			maxi = Math.max(maxi, root.val + leftSum + rightSum);

			return root.val + Math.max(leftSum, rightSum);
	}

	const res = recursion(root);
	return Math.max(maxi, res);
};