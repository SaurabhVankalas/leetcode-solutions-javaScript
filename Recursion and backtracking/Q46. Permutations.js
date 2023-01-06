// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
	let set = new Set();

	const ans = [];
	const backTrack = (arr, ds, set) => {
			if (ds.length === arr.length) {
					ans.push([...ds]); 
					return;
			}
			
			for (let i=0;i<arr.length;i++) {
					if (set.has(i)) continue;
					ds.push(arr[i]);
					set.add(i);
					backTrack(arr, ds, set);
					ds.pop();
					set.delete(i);
			}
	}
	
	backTrack(nums, [], set);
	return ans;
};