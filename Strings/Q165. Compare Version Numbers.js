// Given two version numbers, version1 and version2, compare them.

// Version numbers consist of one or more revisions joined by a dot '.'. Each revision consists of digits and may contain leading zeros. Every revision contains at least one character. Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.

// To compare version numbers, compare their revisions in left-to-right order. Revisions are compared using their integer value ignoring any leading zeros. This means that revisions 1 and 001 are considered equal. If a version number does not specify a revision at an index, then treat the revision as 0. For example, version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.

// Return the following:

// If version1 < version2, return -1.
// If version1 > version2, return 1.
// Otherwise, return 0.

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function(version1, version2) {
	const v1 = version1.split(".");
	const v2 = version2.split(".");
	const minLen = Math.min(v1.length, v2.length);
	let i=0;
	while(i<minLen) {
			const n1 = parseInt(v1[i]);
			const n2 = parseInt(v2[i]);
			if (n1 > n2) {
					return 1;
			}
			if (n2 > n1) {
					return -1;
			}
			i++;
	}
	if (v2.length > v1.length) {
			while(i<v2.length) {
					if (parseInt(v2[i]) > 0) {
							return -1;
					}
					i++;
			}
	}
	if (v1.length > v2.length) {
			while(i<v1.length) {
					if (parseInt(v1[i]) > 0) {
							return 1;
					}
					i++;
			}
	}

	return 0;
};