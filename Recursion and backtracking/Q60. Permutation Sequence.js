// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Brute force solution
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
//  var getPermutation = function(n, k) {
// 	const ans = [];
// 	const nums = [];
// 	for (let i=1;i<=n;i++) {
// 			nums[i-1] = i;
// 	}
// 	// console.log(nums)
// 	const swap = (nums, i, j) => {
// 			const temp = nums[i];
// 			nums[i] = nums[j];
// 			nums[j] = temp;
// 	};
	
// 	const backTrack = (nums, idx) => {
// 			if (idx === nums.length) {
// 					ans.push(parseInt(nums.join("")));
// 					return;
// 			}
			
// 			for (let i=idx;i<nums.length;i++) {
// 					swap(nums, i, idx);
// 					backTrack(nums, idx+1);
// 					swap(nums, i, idx);
// 			}
// 	};
// 	backTrack(nums, 0);
	
// 	ans.sort((a,b) => a - b);
// 	// console.log(ans);
// 	return ans[k-1].toString();
// };

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var getPermutation = function(n, k) {
	let ans = '';
	let nums = [];
	for (let i=1;i<=n;i++) {
			nums[i-1] = i;
	}
	let count = 0;
	k = k - 1;
	
	const backTrack = (nums, k) => {
			if (nums.length === 0) return;
			let i = 1;
			let res = 1;
			while (i<nums.length) {
					res = res * i;
					i++;
			}
			let num = parseInt(k/res);
			ans += nums[num];
			nums.splice(num, 1);
			k = k % res;
			backTrack(nums, k);
	};
	backTrack(nums, k);
	
	// console.log(ans);
	return ans;
};

console.log(getPermutation(4,9));
// ans = 2314