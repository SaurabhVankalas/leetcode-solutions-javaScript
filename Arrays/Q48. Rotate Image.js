/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
	const visitedNodes = {};
	let breakFlag = false;
	const n = matrix.length;
	// Step-1 : rotate the corners
	for (let i=0; i<n;i++) {
			if (breakFlag) {
					break;
			}
			for (let j=0;j<n;j++) {
					let q=i, r=j;
					let key = `${q},${r}`;
					let temp = null;
					while (!visitedNodes[key]) {
							visitedNodes[key] = true;
							if(temp === null) {
									temp = matrix[r][n-1-q];
									matrix[r][n-1-q] = matrix[q][r];
							} else {
									const extraTemp = matrix[r][n-1-q];
									matrix[r][n-1-q] = temp;
									temp = extraTemp;
							}
							// console.log('Value taken from',q,r,matrix[q][r])
							const newTemp = r;
							r = n-1-q;
							q = newTemp;
							key = `${q},${r}`;
					}
					if (Object.keys(visitedNodes).length === n*n) {
							breakFlag = true;
							break;
					}
			}
	}
	// console.log(visitedNodes);
};