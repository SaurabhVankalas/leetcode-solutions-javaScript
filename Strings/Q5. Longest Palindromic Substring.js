/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
	let start = 0;
	let end = 1;
	
	let i, j;
	// check for even scenario
	for (k=1;k<s.length;k++) {
			i = k - 1;
			j = k;
			while(i >= 0 && j < s.length && s[i] === s[j]) {
					if (j - i + 1 > end) {
							start = i;
							end = j - i + 1;
					}
					i--;
					j++;
			}
			// check for odd scenario
			i = k - 1;
			j = k + 1;
			
			while(i >= 0 && j < s.length && s[i] === s[j]) {
					if (j - i + 1 > end) {
							start = i;
							end = j - i + 1;
					}
					i--;
					j++;
			}
	}
	
	
	console.log(start, end);
	return s.slice(start, start + end);
};