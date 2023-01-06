// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
	let ans = '';
	let flag = false;
	
	for (let i=0;i<strs[0].length;i++) {
			const char = strs[0][i];
			for (let j=1;j<strs.length;j++) {
					const item = strs[j];
					if (i<item.length && item[i] === char) {
							continue;
					} else {
							flag = true;
							break;
					}
			}
			if (flag) return ans;
			ans += char;
	}
	
	return ans;
};