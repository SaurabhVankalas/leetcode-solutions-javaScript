// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
	let ans = [];
	const queenMarks = (temp, i, j, n) => {
			let x = i - 1;
			let y = j - 1;
			while (x >= 0) {
					temp[x][j] = '.';
					x--;
			}
			x = i + 1;
			while (x < n) {
					temp[x][j] = '.';
					x++;
			}
			// x = i - 1;
			while(y >= 0) {
					temp[i][y] = '.';
					y--;
			}
			y = j + 1;
			while (y < n) {
					temp[i][y] = '.';
					y++;
			}
			x = i - 1;
			y = j - 1;
			
			while (x >= 0 && y >= 0) {
					temp[x][y] = '.';
					x--;
					y--;
			}
			
			x = i - 1;
			y = j + 1;
			
			while (x >= 0 && y < n) {
					temp[x][y] = '.';
					x--;
					y++;
			}
			
			x = i + 1;
			y = j - 1;
			
			while (x < n && y >= 0) {
					temp[x][y] = '.';
					x++;
					y--;
			}
			
			x = i + 1;
			y = j + 1;
			
			while (x < n && y < n) {
					temp[x][y] = '.';
					x++;
					y++;
			}
	};
	const recursion = (n, r, temp) => {
			if (r === n) {
					ans.push(temp);
					return true;
			};
			let col = 0;
			let queenPlaced = false;
			while (col<n) {
					if (temp[r][col] === '.') {
							col++;
							continue;
					}
					let oldTemp = [];
					for (let c=0;c<n;c++) {
							let arr = [];
							for (let d=0;d<n;d++) {
									arr.push(temp[c][d]);
							}
							oldTemp.push(arr);
					}
					temp[r][col] = 'Q';
					queenMarks(temp, r, col, n);
					// console.log(temp);
					queenPlaced = true;
					if (recursion(n, r+1, temp) === false) {
							queenPlaced = false;
					}
					// recursion(n, r+1, temp);
					temp = oldTemp;
					col++;
			}
			if (queenPlaced === false) return false;
	};
	// let s = [];
	// for (let i=0;i<n;i++) {
	//     s.push['x'];
	// }
	
	for (let j=0;j<n;j++) {
			// temp = new Array(n).fill(new Array(n).fill('x'));
			// console.log(temp)
			let temp = [];
			for (let c=0;c<n;c++) {
					let arr = [];
					for (let d=0;d<n;d++) {
							arr.push('x');
					}
					temp.push(arr);
			}
			temp[0][j] = 'Q';
			
			queenMarks(temp, 0, j, n);
			// console.log(temp);
			recursion(n, 1, temp);
	}
	ans = ans.map(i => {
			i = i.map(j => {
					j = j.join("");
					return j;
			});
			return i;
	});
	return ans;
};