// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

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
 var isSymmetric = function(root) {
	const recursion = (leftRoot, rightRoot) => {
			if (!leftRoot && !rightRoot) {
					return true;
			} else if (!leftRoot && rightRoot) {
					return false;
			} else if (leftRoot && !rightRoot) {
					return false;
			} 
			if (leftRoot.val !== rightRoot.val) return false;
			if (recursion(leftRoot.left, rightRoot.right) === false) {
					return false;
			}
			return recursion(leftRoot.right, rightRoot.left);
	};

	return recursion(root.left, root.right);
};