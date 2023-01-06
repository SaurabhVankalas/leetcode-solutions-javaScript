/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
	const zeroRows = new Array(matrix[0].length).fill(0);
	// console.log(zeroRows, zeroColumns);
	const rowIdx = [];
	const colIdx = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				rowIdx.push(i);
				colIdx.push(j);
			}
		}
	}
	// console.log(rowIdx, colIdx);
	for (let i of rowIdx) {
		matrix[i] = zeroRows;
	}
	for (let i = 0; i < matrix.length; i++) {
		for (let j of colIdx) {
			matrix[i][j] = 0;
		}
	}

	// console.log(rowIdx, matrix);

	return matrix;
};