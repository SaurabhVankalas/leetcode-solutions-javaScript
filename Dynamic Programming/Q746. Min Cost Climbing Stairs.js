// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
	let minCost = Number.POSITIVE_INFINITY;
	const memo = new Map();
	const recursion = (cost, totCost, i) => {
			if (i >= cost.length) {
					if (minCost > totCost) minCost = totCost;
					return 0;
			}

			if (memo.has(i) === true) {
					totCost += memo.get(i);
					if (minCost > totCost) minCost = totCost;
					return memo.get(i);
			}
			
			const oneStep = recursion(cost, totCost + cost[i], i + 1);
			const twoStep = recursion(cost, totCost + cost[i], i + 2);

			memo.set(i, Math.min(oneStep, twoStep) + cost[i]);
			return memo.get(i);
	}

	recursion(cost, 0, 0);
	recursion(cost, 0, 1);
	return minCost;
};