/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
	let nums2last = n-1;
	let nums1last = m-1;
	let pointer = m+n-1;
	while (nums2last > -1 && nums1last > -1) {
			if (nums2[nums2last] >= nums1[nums1last]) {
					nums1[pointer] = nums2[nums2last];
					pointer--;
					nums2last--;
			} else {
					nums1[pointer] = nums1[nums1last];
					nums1[nums1last] = 0;
					nums1last--;
					pointer--;
			}
	}
	if (nums1last < 0) {
			while(nums2last > -1) {
					nums1[nums2last] = nums2[nums2last];
					nums2last--;
			}
	}
};