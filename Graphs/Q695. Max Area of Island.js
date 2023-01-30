// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
	const m = grid.length;
const n = grid[0].length;
	let maxCount = 0;
let c;
const recursion = (i, j) => {
		if (i >= m || j >= n || i < 0 || j < 0 || grid[i][j] === 0) return;
					c++;
					if (maxCount < c) maxCount = c;
		grid[i][j] = 0;
		recursion(i-1,j);
		recursion(i+1,j);
		recursion(i,j-1);
		recursion(i,j+1);
};
for (let i=0;i<m;i++) {
		for (let j=0;j<n;j++) {
				if (grid[i][j] === 1) {
													c = 0;
						recursion(i, j);
				}
		}
}
return maxCount;
};