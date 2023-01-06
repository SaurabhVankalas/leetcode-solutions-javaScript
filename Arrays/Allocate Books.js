// Given an array of integers A of size N and an integer B.

// The College library has N books. The ith book has A[i] number of pages.

// You have to allocate books to B number of students so that the maximum number of pages allocated to a student is minimum.

// A book will be allocated to exactly one student.
// Each student has to be allocated at least one book.
// Allotment should be in contiguous order, for example: A student cannot be allocated book 1 and book 3, skipping book 2.
// Calculate and return that minimum possible number.

// NOTE: Return -1 if a valid assignment is not possible.

module.exports = { 
	//param A : array of integers
	//param B : integer
	//return an integer
	 books : function(A, B){
				 const isAllocationPossible = (m) => {
						 let allocated = 1;
						 let pages = 0;
						 for (let i=0;i<A.length;i++) {
								 if (A[i] > m) return false;
								 
								 if (pages + A[i] > m) {
										 allocated += 1;
										 pages = A[i];
								 } else {
										 pages += A[i];
								 }
						 }  
						 if (allocated > B) return false;
						 return true;
				 };
				 const n = A.length;
				 if (B > n) return -1;
				 let res = -1;
				 let high = 0;
				 let low = 0;
				 for (let i=0;i<n;i++) {
						 if (A[i] > low) low = A[i];
						 high += A[i];
				 }
				 
				 while(low <= high) {
						 const m = Math.floor((low+high)/2);
						 if (isAllocationPossible(m) === true) {
								 res = m;
								 high = m - 1;
						 } else {
								 low = m + 1;
						 }
				 }
				 
				 return res;
	 }
 };
 