// Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.

// Notice: string "abc" repeated 0 times is "", repeated 1 time is "abc" and repeated 2 times is "abcabc".

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
 var repeatedStringMatch = function(a, b, ans = 0) {
	if (b.length >= a.length) {
			let left = 0;
			for (let right=a.length-1;right<b.length;right++) {
					// console.log(b.slice(left,right+1))
					if (b.slice(left,right+1) === a) {
							left += a.length - 1;
							right += a.length - 1;
							ans++;
					}
					left++;
			}
			let splitB = b.split(a);
			if (splitB.length === 1 && splitB[0].length === b.length) {
					return repeatedStringMatch(a+a, b, ans + 1);
			}
			let leftPart = splitB[0];
			let rightPart = splitB[splitB.length - 1];
			// console.log(leftPart, rightPart, ans)
			if (leftPart.length) {
					ans++;
					if (a.slice(a.length - leftPart.length, a.length) !== leftPart) {
							return -1;
					}
			}
			if (rightPart.length) {
					ans++;
					if (a.slice(0, rightPart.length) !== rightPart) {
							return -1;
					}
			}
			for (let i of splitB) {
					if (i.length && a.indexOf(i) === -1) {
							return -1;
					}
			}
			// console.log(ans)
			return ans;
	} else {
			if (a.indexOf(b) > -1) {
					ans++;
					return ans;
			} else if ((a+a).indexOf(b) > -1) {
					return ans + 2;
			} else {
					return -1;
			}
	}
};

// Optimal Solution:

var repeatedStringMatch = function(a, b) {
	let repeat = '';
	let count = 0;
	while (true) {
			if (repeat.length > b.length + a.length) return -1;
			repeat = repeat + a;
			count++;
			if (repeat.includes(b)) return count;
	}
};