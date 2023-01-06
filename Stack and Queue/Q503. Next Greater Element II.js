// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
	const ans = new Array(nums.length).fill(-1);
	const stack = [];
	let idx = (2 * nums.length) - 1;
	while(idx >= 0) {
			while(stack.length && stack[stack.length-1] <= nums[idx%nums.length]) {
					stack.pop();
			}
			if (stack.length) {
					ans[idx%nums.length] = stack[stack.length - 1];
			} 
			stack.push(nums[idx%nums.length]);
			idx--;
	}
	return ans;
};