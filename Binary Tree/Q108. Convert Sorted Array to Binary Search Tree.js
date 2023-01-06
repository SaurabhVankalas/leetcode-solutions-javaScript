// Given an integer array nums where the elements are sorted in ascending order, convert it to a 
// height-balanced
//  binary search tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
	let ans;
	const recursion = (prev, i, j) => {
			if (i > j) return;
			const m = i + Math.floor((j - i + 1)/2);
			const node = new TreeNode(nums[m]);
			if (prev) {
					if (prev.left === null) {
							prev.left = node;
					} else if (prev.right === null){
							prev.right = node;
					}
			} else {
					prev = node;
					ans = node;
			}
			recursion(node, i, m-1);
			recursion(node, m+1,j);
	}

	recursion(null, 0, nums.length - 1);
	return ans;
};