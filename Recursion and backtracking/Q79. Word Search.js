// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {

	const recursion = (board, word, i, j, k) => {
			if (j === board[0].length || i === board.length || i === -1 || j === -1) {
					return false;
			}

			if (board[i][j] === word[k]) {
					if (k === word.length - 1) {
							return true;
					} else {
							board[i][j] = '';
							const checkLeft = recursion(board, word, i - 1, j, k + 1);
							if (checkLeft === true) return true;
							const checkRight = recursion(board, word, i + 1, j, k + 1);
							if (checkRight === true) return true;
							const checkUp = recursion(board, word, i, j - 1, k + 1);
							if (checkUp === true) return true;
							const checkDown = recursion(board, word, i, j + 1, k + 1);
							if (checkDown === true) return true;
							board[i][j] = word[k];
							return false;
					}
			}

			return false; 
	};

	for (let i=0;i<board.length;i++) {
			for (let j=0;j<board[0].length;j++) {
					if (board[i][j] === word[0]) {
							if (word.length === 1) return true;
							board[i][j] = '';
							const checkLeft = recursion(board, word, i - 1, j, 1);
							if (checkLeft === true) return true;
							const checkRight = recursion(board, word, i + 1, j, 1);
							if (checkRight === true) return true;
							const checkUp = recursion(board, word, i, j - 1, 1);
							if (checkUp === true) return true;
							const checkDown = recursion(board, word, i, j + 1, 1);
							if (checkDown === true) return true;
							board[i][j] = word[0];
					}
			}
	}

	return false;
};