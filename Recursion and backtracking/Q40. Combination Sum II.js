// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.


// Brute - force solution:

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
	const ans = [];
	let set = new Set();
	let map = new Map();
	for (let i=0;i<candidates.length;i++) {
			if (!set.has(candidates[i])) {
					set.add(candidates[i]);
					map.set(candidates[i], 0);
			} else {
					const temp = map.get(candidates[i]);
					map.set(candidates[i], temp + 1);
			}
	}
	
	const arr = [...set];
	
	arr.sort((a,b) => a - b);
	// console.log(map, arr)
	set = new Set();
	
	const backTrack = (arr, target, currSubset, startIdx, map) => {
			if (target === 0) {
					const subsetStr = currSubset.join(',');
					if (set.has(subsetStr) === false) {
							set.add(subsetStr);
							ans.push(currSubset);
					}
					return;
			}
			if (target < 0) return;
			
			for (let i=startIdx;i<arr.length;i++) {
					const diff = target - arr[i];
					const temp = map.get(arr[i]);
					
					if (temp === 0) {
							backTrack(arr, diff, [...currSubset, arr[i]], i + 1, new Map(map));
					} else if (temp > 0) {
							const copy = new Map(map);
							copy.set(arr[i], temp - 1);
							backTrack(arr, diff, [...currSubset, arr[i]], i, copy);
							backTrack(arr, diff, [...currSubset, arr[i]], i + 1, new Map(map));
					}
			}
	};
			
	backTrack(arr, target, [], 0, map);
	// console.log(set)
	
	return ans;
};


// Ideal Solution:

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
	const ans = [];
	
	const backTrack = (candidates, startIdx, target, ds) => {
			if (target === 0) {
					ans.push([...ds]);
					return;
			}
			
			for (let i=startIdx;i<candidates.length;i++) {
					if (i>startIdx && candidates[i] === candidates[i-1]) continue;
					if (candidates[i] > target) break;
					ds.push(candidates[i]);
					backTrack(candidates, i+1, target-candidates[i], ds);
					ds.pop();
			}
	};
	
	candidates.sort((a,b) => a - b);
			
	backTrack(candidates, 0, target, []);
	// console.log(set)
	
	return ans;
};