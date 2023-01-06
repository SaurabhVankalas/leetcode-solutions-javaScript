/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var majorityElement = function(nums) {
	const n = parseInt(nums.length/3) + 1;
	let c1 = 0;
	let c2 = 0;
	let elem1 = null;
	let elem2 = null;
	for (let i of nums) {
			if (elem1 === i) c1++;
			else if (elem2 === i) c2++;
			else if (c1 === 0) elem1 = i, c1 = 1;
			else if (c2 === 0) elem2 = i, c2 = 1;
			else c1--, c2--;
	}
	c1 = 0, c2 = 0;
	const ans = [];
	if (elem1 !== null) ans.push(elem1);
	if (elem2 !== null) ans.push(elem2);
	nums.map(a => {
			if (a === elem1) c1++;
			if (a === elem2) c2++;
	});
	// console.log(ans, c1, c2)
	if (c1 >= n && c2 >= n) return ans;
	else if (c1>=n) return [ans[0]];
	else if (c2>=n) return [ans[1]];
	else return [];
};