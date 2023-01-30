/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
	const queue = [];
	let minutes = 0;
	let freshCount = 0;
	for (let i=0;i<grid.length;i++) {
			for (let j=0;j<grid[0].length;j++) {
					if (grid[i][j] === 2) {
							queue.push([i, j]);
					}
					if (grid[i][j] === 1) {
							freshCount++;
					}
			}
	}

	if (freshCount === 0) return 0;

	while(queue.length) {
			const n = queue.length;
			for (let i=0;i<n;i++) {
					const cord = queue.pop();
					if (isFresh(grid, cord[0] - 1, cord[1]) === true) {
							freshCount--;
							queue.unshift([cord[0] - 1, cord[1]]);
					}
					if (isFresh(grid, cord[0] + 1, cord[1]) === true) {
							freshCount--;
							queue.unshift([cord[0] + 1, cord[1]]);
					}
					if (isFresh(grid, cord[0], cord[1] - 1) === true) {
							freshCount--;
							queue.unshift([cord[0], cord[1] - 1]);
					}
					if (isFresh(grid, cord[0], cord[1] + 1) === true) {
							freshCount--;
							queue.unshift([cord[0], cord[1] + 1]);
					}
			}
			minutes++;
	}
	if (freshCount > 0) return -1;

	return minutes - 1;
};

const isFresh = (grid, i, j) => {
	if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== 1) return false;
	grid[i][j] = 2;
	return true;
};