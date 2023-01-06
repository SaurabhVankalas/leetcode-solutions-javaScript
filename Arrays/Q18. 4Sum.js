// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
	nums.sort((a,b) => a - b);
	// console.log(nums)
	const ans = [];
	let i=0;

	while(i < nums.length) {
			let j = i+1;
			
			while (j<nums.length) {
					const twoSum = nums[i] + nums[j];
					let left = j+1;
					let right = nums.length - 1;
					
					while (left < right) {
							const diff = target - twoSum;
							const nextTwoSum = nums[left] + nums[right];
							if (nextTwoSum === diff) {
									// console.log(i, j, left, right)
									ans.push([nums[i], nums[j], nums[left], nums[right]]);
									while(nums[left + 1] === nums[left]) {
											left++;
									}
									left++;
									
									while(nums[right - 1] === nums[right]) {
											right--;
									}
									right--;
							} else if (nextTwoSum > diff) {
									while(nums[right - 1] === nums[right]) {
											right--;
									}
									right--;
							} else {
									while(nums[left + 1] === nums[left]) {
											left++;
									}
									left++;
							}
					}
					while (nums[j] === nums[j+1]) {
							j++;
					}
					j++;  
			}
			
			while(nums[i] === nums[i+1]) {
					i++;
			}
			i++;
	}
	
	return ans;
};