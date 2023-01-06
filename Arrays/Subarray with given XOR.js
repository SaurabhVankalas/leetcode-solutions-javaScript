// Given an array of integers A and an integer B.

// Find the total number of subarrays having bitwise XOR of all elements equals to B.

module.exports = { 
	//param A : array of integers
	//param B : integer
	//return an integer
	 solve : function(A, B){
				 let count = 0;
				 let obj = {};
				 let prefixSum = 0;
				 for(let i=0;i<A.length;i++) {
						 prefixSum = prefixSum ^ A[i];
						 if (prefixSum === B) count++;
						 const y = prefixSum ^ B;
						 if (y in obj) {
								 count = count + obj[y];
								 // obj[y]++;
						 } 
						 if (prefixSum in obj) {
								 obj[prefixSum]++;
						 } else {
								 obj[prefixSum] = 1;
						 }
				 }
				 return count;
	 }
 };
 