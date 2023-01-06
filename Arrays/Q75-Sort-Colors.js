/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
	let i, j, temp, swapped;
	for (i=0;i<nums.length;i++) {
			swapped = false;
			for (j=0;j<nums.length - i - 1;j++) {
					if(nums[j] > nums[j+1]) {
							temp = nums[j+1];
							nums[j+1] = nums[j];
							nums[j] = temp;
							swapped = true;
					}
			}
			if (!swapped) {
					break;
			}
	}
};