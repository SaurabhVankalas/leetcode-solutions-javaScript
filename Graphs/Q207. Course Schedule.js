// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
	const visited = new Set();
	const preReq = new Map();
	for (let i=0;i<numCourses;i++) {
			preReq.set(i, []);
	}
	for (let i of prerequisites) {
			const arr = preReq.get(i[0]);
			arr.push(i[1]);
			preReq.set(i[0], arr);
	}

	const dfs = (node) => {
			if (visited.has(node) === true) return false;
			if (preReq.get(node).length === 0) return true;
			visited.add(node);
			for (let i of preReq.get(node)) {
					if (dfs(i) === false) return false;
			}
			visited.delete(node);
			preReq.set(node, []);
			return true;
	};

	for (let i=0;i<numCourses;i++) {
			if (dfs(i) === false) return false;
	}

	return true;
}