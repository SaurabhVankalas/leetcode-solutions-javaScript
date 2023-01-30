// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
	// coins.sort((a,b) => b - a);
	if (amount === 0) return 0;
	const memo = new Map();
	const backTrack = (amt, c, idx) => {
			if (amt in memo) return memo[amt];
			if (amt < 0) return null;
			if (amt === 0) {
					ans = c;
					return 0;
			}
			let shortestWay = null;

			for (let i=idx;i<coins.length;i++) {
					const diff = amt - coins[i];
					const res = backTrack(diff, c + 1, idx);
					if (res !== null) {
							if (shortestWay) {
									shortestWay = Math.min(1+res, shortestWay);
							} else {
									shortestWay = 1 + res;
							}
					}
			}
			memo[amt] = shortestWay;
			return shortestWay;
	};

	const res = backTrack(amount, 0, 0);
	if (res) return res;
	return -1;
};