/**
 * @param {number[]} nums
 * @return {number}
 */

//  Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

//  You must write an algorithm that runs in O(n) time.

 var longestConsecutive = function(nums) {
	// step 1: create a set
	
	const set = new Set();
	nums.forEach(item => set.add(item));
	
	// Step 2: get start Points
	let maxLength = 0, temp;
	const starts = [];
	for (let i=0;i<nums.length;i++) {
			temp = 1;
			if (!set.has(nums[i] - 1)) {
					starts.push(nums[i]);
					let num = nums[i] + 1;
					while(set.has(num)) {
							temp++;
							num++;
					}
			}
			maxLength = Math.max(temp, maxLength);
	}
	
	return maxLength;
};