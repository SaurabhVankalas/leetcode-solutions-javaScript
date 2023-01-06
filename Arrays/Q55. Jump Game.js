// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
	let goal = nums.length - 1;
	for (let i=nums.length-1;i>=0;i--) {
			// console.log("hi")
			if (i + nums[i] >= goal) {
					goal = i;
			}
	}
	// console.log(goal);
	return goal === 0;
};