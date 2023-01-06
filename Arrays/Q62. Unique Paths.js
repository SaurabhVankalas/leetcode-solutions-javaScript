/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
	// const matrix = new Array(m).fill(new Array(n).fill(0));
	// for (let i=0;i<m;i++) {
	//     for (let j=0;j<n;j++) {
	//         if (j === 0 || i === 0) {
	//             matrix[i][j] = 1;
	//         } else {
	//             matrix[i][j] = matrix[i-1][j] + matrix[i][j-1];
	//         }
	//     }
	// }
	// return matrix[m-1][n-1];
	
	const N = m+n-2;
	const r = Math.min(m-1, n-1);
	
	let res = 1;
	for (let i=1;i<=r;i++) {
			res = res * (N - i + 1) / i;
	}
	
	return res;
};