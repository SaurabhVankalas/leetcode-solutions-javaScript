// Given two sorted arrays arr1 and arr2 of size N and M respectively and an element K. The task is to find the element that would be at the k’th position of the final sorted array.

class Solution {
	kthElement(A,B,n,m,k){ 
			if (n > m) {
					return this.kthElement(B,A,m,n,k);
			}
			let low = Math.max(0, k - m);
			let high = Math.min(k, n);
			while (low <= high) {
					let cut1 = Math.floor((low+high)/2);
					let cut2 = k - cut1;
					let l1 = cut1 === 0 ? Number.NEGATIVE_INFINITY : A[cut1 - 1];
					let l2 = cut2 === 0 ? Number.NEGATIVE_INFINITY : B[cut2 - 1];
					let r1 = cut1 === n ? Number.POSITIVE_INFINITY : A[cut1];
					let r2 = cut2 === m ? Number.POSITIVE_INFINITY : B[cut2];
					if (l1 <= r2 && l2 <= r1) {
							return Math.max(l1,l2);
					} else if (l1 > r2) {
							high = cut1 - 1;
					} else {
							low = cut1 + 1;
					}
			}
			
			return -1;
	}
}