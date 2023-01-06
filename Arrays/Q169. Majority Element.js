/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {        // Space Complexity O(n)
	if (nums.length === 1) return nums[0];
	const obj = {};
	for (let i of nums) {
			if (i in obj) {
					obj[i]++;
					if (obj[i] > parseInt(nums.length/2)) return i;
			} else {
					obj[i] = 1;
			}
	}
};

// Solution for space complexity O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
	let ele = nums[0];
	let count = 1;
	
	for (let i = 1; i < nums.length; i++) {
			const num = nums[i];
			if (num === ele) {
					count++;
			} else {
					if (count === 0) {
							ele = num;
							count = 1;
					} else {
							count--;
					}
			}
	}
	
	return ele;
};