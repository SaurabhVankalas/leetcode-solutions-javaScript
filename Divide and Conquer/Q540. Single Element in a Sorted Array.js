/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNonDuplicate = function(nums) {
	let prev = null;
	const binarySearch = (arr, left, right) => {
			if (left > right) return null;
			if (left === right) {
					if (prev === null) {
							prev = arr[left];
					} else {
							if (arr[left] === prev) {
									prev = null;
									return null;
							}
							return prev;
					} 
					return null;
			}
			const mid = left + parseInt((right - left) / 2);
			const lef = binarySearch(arr, left, mid);
			if (lef !== null) {
					return lef;
			}
			const rig = binarySearch(arr, mid+1, right);
			if (rig !== null) {
					return rig;
			}
			return null;
	};
	const ans = binarySearch(nums, 0, nums.length - 1);
	// console.log(prev, ans)
	if (ans === null) {
			return prev;
	}
	return ans;
};