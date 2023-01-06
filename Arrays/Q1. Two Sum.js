/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
	const obj = {};
	for (let i=0;i<nums.length;i++) {
			const secNum = target - nums[i];
			if (secNum in obj) {
					return [obj[secNum], i];
			}
			obj[nums[i]] = i;
	}
};