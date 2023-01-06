/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
	let ans;
	const isNumAllowed = (board, i, j, val) => {
			let x=0;
			let y=0;
			while(x < 9) {
					if (board[x][j] == val) return false;
					x++;
			}
			while (y < 9) {
					if (board[i][y] == val) return false;
					y++;
			}
			let x1,x2,y1,y2;
			if (i >=0 && i <= 2) {
					x1 = 0;
					x2 = 2;
			} else if (i >= 3 && i<= 5) {
					x1 = 3;
					x2 = 5;
			} else {
					x1 = 6;
					x2 = 8;
			}

			if (j >= 0 && j <= 2) {
					y1 = 0;
					y2 = 2;
			} else if (j >= 3 && j <= 5) {
					y1 = 3;
					y2 = 5;
			} else {
					y1 = 6;
					y2 = 8;
			}

			for (let m=x1;m<=x2;m++) {
					for (let n=y1;n<=y2;n++) {
							if (board[m][n] == val) return false;
					}
			}

			return true;
	};
	const recursion = (board, i, j) => {
			if (j===9) {
					ans = board;
					return;
			}
			if (i === 9) {
					i = 0;
					j++;
			}
			while (board[i][j] !== '.') {
					i++;
					if (j===9) {
							ans = board;
							break;
					}
					if (i===9) {
							i=0;
							j++;
					}
			}
			if (ans) return;
			for (let x=1;x<=9;x++) {
					if (isNumAllowed(board, i, j, x) === false) continue;
					board[i][j] = x.toString();
					recursion(board, i, j);
					if (ans) return;
					board[i][j] = '.';
			}
	};

	recursion(board, 0, 0);

	return ans;
};