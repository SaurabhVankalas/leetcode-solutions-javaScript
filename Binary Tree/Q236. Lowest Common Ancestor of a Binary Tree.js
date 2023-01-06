// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
	if (root === p || root === q) return root;
	let first = false;
	let ans;
	const recursion = (root, p, q) => {
			if (!root) return null;
			if (root === p) {
					if (first === false) {
							first = true;
							root.pFlag = true;
					} else {
							return 1;
					}
			}
			if (root === q) {
					if (first === false) {
							first = true;
							root.qFlag = true;
					} else {
							return 2;
					}
			}
			
			const lef = recursion(root.left, p, q);
			const rig = recursion(root.right, p, q);
			// console.log(lef, rig)
			if (lef && rig) {
					ans = root;
					// console.log(ans)
					return true;
			}
			if (lef) {
					if (root.pFlag || root.qFlag) {
							ans = root;
							return true;
					}
					if (lef === 1) {
							root.pFlag = true;
							return lef;
					}
					if (lef === 2) {
							root.qFlag = true;
							return lef;
					}
			}
			if (rig) {
					if (root.pFlag || root.qFlag) {
							ans = root;
							return true;
					}
					if (rig === 1) {
							root.pFlag = true;
							return rig;
					}
					if (rig === 2) {
							root.qFlag = true;
							return rig;
					}
			}
			
			if (root.pFlag === true) {
					return 1;
			} else if (root.qFlag === true) {
					return 2;
			}
			return null;
	};
	
	recursion(root, p, q);
	return ans;
};