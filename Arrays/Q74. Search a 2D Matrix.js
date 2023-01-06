/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
	const m = matrix[0].length;
	const n = matrix.length;
	if (m === 1 && n===1) {
			return target === matrix[m-1][n-1];
	}
	let i = null;
	for (i=0;i<n-1;i++) {
			if (target >= matrix[i][0] && target < matrix[i+1][0]) {
					break;
			}
	}
	if (i === null) {
			i = 0;
	}
	for (let j=0;j<m;j++) {
			if (target === matrix[i][j]) {
					return true;
			}
	}
	return false;
};