// Given an array having both positive and negative integers. The task is to compute the length of the largest subarray with sum 0.

//User function Template for javascript

/**
 * @param {Number[]} arr
 * @param {Number} n
 * @returns {Number}
 */

 class Solution {
	maxLen(arr,n){
			let maxLength = 0;
			const obj = {};
			let sum = 0;
			for (let i=0;i<n;i++) {
					sum = sum + arr[i];
					if (sum === 0) {
							maxLength = i + 1;
					} else {
							if (sum in obj) {
							maxLength = Math.max(maxLength, i - obj[sum]);
							} else {
									obj[sum] = i;
							}
					}
			} 
			return maxLength;
	}
}