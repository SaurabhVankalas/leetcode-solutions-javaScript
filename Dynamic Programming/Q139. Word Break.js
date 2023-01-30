// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
	const wordSet = new Set();
	const memo = new Map();
	for (let i of wordDict) {
			wordSet.add(i);
	}

	const backTrack = (s) => {
			if (s === "") return true;
			if (memo.has(s) === true) return memo.get(s);

			for (let i=1;i<=s.length;i++) {
					const word = s.slice(0,i);
					if (wordSet.has(word) === true) {
							if (backTrack(s.slice(i, s.length)) === true) {
									return true;
							}
							memo.set(s, false);
					}
			}

			return false;
	}

	return backTrack(s);
};