// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The test cases are generated so that the answer fits in a 32-bit integer.

/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
	const memo = {};
	const backTrack = (s, i) => {
			const str = s.slice(i, s.length);
			if (str in memo) {
					return memo[str];
			}
			if (i >= s.length) {
					return 1;
			}

			if (Math.floor(s[i]) > 0) {
					memo[str] = backTrack(s, i+1);
			}

			if (Math.floor(s.slice(i, i+2)) >= 10 && Math.floor(s.slice(i, i+2)) <= 26) {
					if (str in memo) {
							memo[str] += backTrack(s, i+2);
					} else {
							memo[str] = backTrack(s, i+2);
					}
			}

			if (!memo[str]) {
					memo[str] = 0;
			}

			return memo[str];

	};
	
	return backTrack(s, 0);
};