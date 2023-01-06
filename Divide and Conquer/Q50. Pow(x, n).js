/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
	if (n === 1) return x;
	if (n===0) return 1;
	let absN, isNegative;
	if (n < 0) {
			absN = n * -1;
			isNegative = true;
	} else {
			absN = n;
			isNegative = false;
	}
	let ans = 1;
	while (absN > 0) {
			if (absN % 2 === 1) {
					ans = ans * x;
					absN--;
			} else {
					x = x * x;
					absN = absN / 2;
			}
	}
	if(isNegative) {
			return 1/ans;
	}
	return ans;
};