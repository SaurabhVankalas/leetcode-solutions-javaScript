// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
	const ans = [];
	const recursion = (s, prefixArr) => {
			if (s.length === 0) {
					ans.push([...prefixArr]);
					return;
			};
			for (let i=1;i<=s.length;i++) {
					let sliced = s.slice(0,i);
					if (isPalindrome(sliced)) {
							// console.log(sliced)
							prefixArr.push(sliced);
							recursion(s.slice(i, s.length), prefixArr);
							prefixArr.pop();
					} 
			}
	}
	const isPalindrome = (str) => {
			let first = 0;
			let last = str.length - 1;
			while(first < last) {
					if (str[first] === str[last]) {
							first++;
							last--;
					} else {
							return false;
					}
			}
			return true;
	};
	
	recursion(s, []);
	return ans;
	
};