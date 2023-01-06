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
 const orderTraversal = (root, levelObj = {}, level=0) => {
	if (!root) return levelObj;
	level++;
	if (level in levelObj) {
			levelObj[level].push(root.val);
	} else {
			levelObj[level] = [root.val];
	}
	const leftSubArrObj = orderTraversal(root.left, levelObj, level);
	const rightSubArrObj = orderTraversal(root.right, leftSubArrObj, level);
	
	return rightSubArrObj;
}
var levelOrder = function(root) {
	const traversalObj = orderTraversal(root);
	const res = [];
	for (key in traversalObj) {
			res.push(traversalObj[key]);
	}
	return res;
};