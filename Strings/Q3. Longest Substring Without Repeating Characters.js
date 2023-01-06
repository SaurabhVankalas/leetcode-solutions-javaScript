/**
 * @param {string} s
 * @return {number}
 */

// sliding window
 var lengthOfLongestSubstring = function(s) {
	let count = 0;
	let obj = {};
	let i = 0;
	
	for (let j=0;j<s.length;j++) {
			if (s[j] in obj) {
					i = Math.max(i, obj[s[j]] + 1);
			}
			obj[s[j]] = j;
			count = Math.max(count, j - i + 1);
	}
	
	return count;
};