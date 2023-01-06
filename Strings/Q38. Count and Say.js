// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

// For example, the saying and conversion for digit string "3322251":
// Given a positive integer n, return the nth term of the count-and-say sequence.

/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
	let s = "1";
	if (n === 1) return s;
	for (let i=2;i<=n;i++) {
			let t = [];
			let c;
			let j = 1;
			let breakPoint = false;
			while (breakPoint === false) {
					c = 1;
					while(j < s.length && s[j] === s[j-1]) {
							c++;
							j++;
					}
					t.push(`${c}${s[j-1]}`);
					// console.log(t)
					j = j + 1;
					if (j === s.length) {
							t.push('1' + s[j-1]);
					}
					if (j >= s.length) breakPoint = true;
			}
			s = t.join("");
			// console.log(s, t);
	}
	return s;
};