// Given an integer array nums, return the number of reverse pairs in the array.

// A reverse pair is a pair (i, j) where:

// 0 <= i < j < nums.length and
// nums[i] > 2 * nums[j]

/**
 * @param {number[]} nums
 * @return {number}
 */

 const merge = (nums, l, m, r) => {
	const n1 = m - l + 1;
	const n2 = r - m;
			
	const L = new Array(n1);
	const R = new Array(n2);
	
	for (let i = 0;i<n1;i++) {
			L[i] = nums[l+i];
	}
	
	for (let j=0;j<n2;j++) {
			R[j] = nums[m+1+j];
	}
	
	// perform counting operation
	let a = 0;
	let b = 0;
	
	// console.log(L, R)
	
	while(a<n1) {
			if (b < n2 && L[a] <= 2*R[b]) {
					count = count + b;
					// console.log(L, R, count);
					a++;
			} else {
					if (b<n2) {
							b++;
					} else {
							// console.log(L, R, count);
							count += n2;
							a++;
					}
			}
	}
	
	let x = 0;
	let y = 0;
	let k = l;
	while (x < n1 && y< n2) {
			if (L[x] <= R[y]) {
					nums[k] = L[x];
					x++;
			} else {
					nums[k] = R[y];
					y++;
			}
			k++;
	}
	
	while (x < n1) {
			nums[k] = L[x];
			x++;
			k++;
	}
	
	while (y < n2) {
			nums[k] = R[y];
			y++;
			k++;
	}
}
const mergeSort = (nums, l, r) => {
	if (l>=r) return;
	const m = parseInt(l + (r-l)/2);
	mergeSort(nums, l, m);
	mergeSort(nums, m+1, r);
	merge(nums, l, m, r);
};

let count;
var reversePairs = function(nums) {
	count = 0;
	mergeSort(nums, 0, nums.length-1);
	return count;
};