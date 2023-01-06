// Given the integers zero, one, low, and high, we can construct a string by starting with an empty string, and then at each step perform either of the following:

// Append the character '0' zero times.
// Append the character '1' one times.
// This can be performed any number of times.

// A good string is a string constructed by the above process having a length between low and high (inclusive).

// Return the number of different good strings that can be constructed satisfying these properties. Since the answer can be large, return it modulo 109 + 7.

/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
 var countGoodStrings = function(low, high, zero, one) {
	const table = new Array(high + 1).fill(0);
	const modulo = 1000000007;
	table[0] = 1;
	
	for (let i=1;i<=high;i++) {
			if (i >= zero) {
					table[i] += table[i-zero];
			}
			if (i >= one) {
					table[i] += table[i-one];
			}
			if (table[i] >= modulo) {
					table[i] = table[i] % modulo;
			}
	}
	
	let ans = 0;
	
	for (let i=low;i<=high;i++) {
			ans += table[i];
	}
	if (ans >= modulo) {
			return ans % modulo;
	}
	
	return ans;
};