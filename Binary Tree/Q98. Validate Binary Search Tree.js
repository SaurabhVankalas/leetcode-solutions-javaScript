// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left 
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

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
 * @return {boolean}
 */
 var isValidBST = function(root) {

	const recursion = (root, range) => {
			if (!root) return true;

			if (root.val > range[0] && root.val < range[1]) {
					const leftVal = recursion(root.left, [range[0], root.val]);
					if (leftVal === false) return false;
					return recursion(root.right, [root.val, range[1]]);
			} 
			return false;
	};

	return recursion(root, [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY]);
};

