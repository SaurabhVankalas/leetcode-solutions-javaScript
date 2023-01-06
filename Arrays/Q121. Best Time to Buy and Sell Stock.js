/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
	let buyIdx = 0;
	let profit = 0;
	for (let i=1;i<prices.length;i++) {
			const diff = prices[i] - prices[buyIdx];
			if (diff > profit) {
					profit = diff;
			} else {
					if (diff < 0) {
							buyIdx = i;
					}
			}
	}
	return profit;
};