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
 let maxDiameter = 0;
 const calcLen = (root, level=0) => {
		 if (!root) return level;
		 level++;
		 const leftLen = calcLen(root.left, level);
		 const rightLen = calcLen(root.right, level);
		 maxDiameter = Math.max(maxDiameter, leftLen + rightLen - level - level);
		 return Math.max(leftLen, rightLen);
 };
 var diameterOfBinaryTree = function(root, level=0) {
		 maxDiameter = 0;
		 const len = calcLen(root);
		 return maxDiameter;
 };