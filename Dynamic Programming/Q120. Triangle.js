// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
	const memo = {};
	const recursion = (triangle, row, idx) => {
			if (row === triangle.length) {
					if (idx >= triangle[row-1].length) {
							memo[row-1][idx] = 0;
							return 0;
					}
					memo[row-1][idx] = triangle[row-1][idx];
					return 0;
			}
			if (row in memo) {
					if (idx in memo[row]) {
							return memo[row][idx];
					} else {
							const l = recursion(triangle, row + 1, idx) + triangle[row][idx];
							const r = recursion(triangle, row + 1, idx + 1) + triangle[row][idx];
							memo[row][idx] = Math.min(l, r);
					}
			} else {
					memo[row] = {}; 
					const l = recursion(triangle, row + 1, idx) + triangle[row][idx];
					const r = recursion(triangle, row + 1, idx + 1) + triangle[row][idx];
					memo[row][idx] = Math.min(l, r);
			}
			return memo[row][idx];
	}
	return recursion(triangle, 0, 0, 0);
};