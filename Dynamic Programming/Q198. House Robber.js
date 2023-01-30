/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
	let maxRobbing = 0;
	const memo = new Map();
	const recursion = (nums, money, i) => {
			if (i >= nums.length) {
					if (maxRobbing < money) maxRobbing = money;
					return 0;
			}
			
			if (memo.has(i)) {
					money += memo.get(i);
					if (maxRobbing < money) maxRobbing = money;
					return memo.get(i);
			}
			const oneApart = recursion(nums, money + nums[i], i + 2);
			const twoApart = recursion(nums, money + nums[i], i + 3);

			memo.set(i, Math.max(oneApart, twoApart) + nums[i]);
			return memo.get(i);
	}

	recursion(nums, 0, 0);
	recursion(nums, 0, 1);

	return maxRobbing;
};