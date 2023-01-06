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
 let ans;

 const recursion = (root) => {
		 if (!root) return 0;
		 const leftHeight = recursion(root.left);
		 const rightHeight = recursion(root.right);
		 const diff = Math.abs(leftHeight - rightHeight);
		 // console.log(diff, leftHeight, rightHeight);
		 if (diff > 1) {
				 ans = false;
		 }
		 return Math.max(leftHeight, rightHeight) + 1;
 };
 var isBalanced = function(root) {
		 ans = true;
		 recursion(root);
		 return ans;
 };
 
 