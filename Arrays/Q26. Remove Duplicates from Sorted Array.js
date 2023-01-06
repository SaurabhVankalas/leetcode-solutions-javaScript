// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
	if (nums.length === 1) return 1;
	let first = 0;
	let sec = 1;
	let prev = nums[0];
	let k = 0;
	
	while(sec < nums.length) {
			first++;
			if (first === nums.length) {
					break;
			}
			while(nums[sec] === prev) {
					sec++;
			}
			if (sec >= nums.length) {
					break;
			} else {
					nums[first] = nums[sec];
			}
			prev = nums[first];
	}
	
	// console.log(first);
	return first;
};