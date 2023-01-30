// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


// Naive Approach:
/**
 * @param {character[][]} grid
 * @return {number}
 */
 class Node {
	constructor(pos, neighbors) {
			this.pos = pos;
			this.neighbors = neighbors === undefined ? new Set() : neighbors;
	}
}
var numIslands = function(grid) {
 const m = grid.length;
 const n = grid[0].length;
 let count = 0;
 const map = new Map();
 const recursion = (i, j, prevNode) => {
		 if (i >= m || j >= n || i < 0 || j < 0 || grid[i][j] === '0') return;
		 const pos = `${i},${j}`;
		 let node;
		 if (map.has(pos) === false) {
				 node = new Node(pos);
				 map.set(pos, node);
		 } else {
				 node = map.get(pos);
		 }
		 if (prevNode.neighbors.has(node) === false) {
				 prevNode.neighbors.add(node);
				 recursion(i-1,j,node);
				 recursion(i+1,j,node);
				 recursion(i,j-1,node);
				 recursion(i,j+1,node);
		 }
 };
 for (let i=0;i<m;i++) {
		 for (let j=0;j<n;j++) {
				 const pos = `${i},${j}`;
				 if (map.has(pos) === false && grid[i][j] === '1') {
						 const node = new Node(pos);
						 recursion(i-1,j,node);
						 recursion(i+1,j,node);
						 recursion(i,j-1,node);
						 recursion(i,j+1,node);
						 count++;
				 }
		 }
 }
 return count;
};


// Optimal Solution
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
	const m = grid.length;
	const n = grid[0].length;
	let count = 0;
	const recursion = (i, j) => {
			if (i >= m || j >= n || i < 0 || j < 0 || grid[i][j] === '0') return;
			const pos = `${i},${j}`;
			grid[i][j] = '0';
			recursion(i-1,j);
			recursion(i+1,j);
			recursion(i,j-1);
			recursion(i,j+1);
	};
	for (let i=0;i<m;i++) {
			for (let j=0;j<n;j++) {
					if (grid[i][j] === '1') {
							recursion(i, j);
							count++;
					}
			}
	}
	return count;
};