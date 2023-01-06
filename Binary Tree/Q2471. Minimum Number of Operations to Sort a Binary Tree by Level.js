// You are given the root of a binary tree with unique values.

// In one operation, you can choose any two nodes at the same level and swap their values.

// Return the minimum number of operations needed to make the values at each level sorted in a strictly increasing order.

// The level of a node is the number of edges along the path between it and the root node.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minimumOperations = function(root) {
	const obj = {};
	let ans = 0;
	const recursion = (root, lvl) => {
			if (!root) return;
			root.level = lvl;
			const level = root.level;
			if (level in obj) {
					// let arr = obj[level];
					// let c = 0;
					// let i = arr.length - 1;
					// while(root.val < arr[i]) {
					//     c = 1;
					//     i--;
					// }
					// arr.splice(i+1, 0, root.val);
					// ans += c;
					// obj[level] = arr;
					obj[level].push(root.val);
			} else {
					obj[level] = [root.val];
			}
			recursion(root.left, lvl+1);
			recursion(root.right, lvl+1);
	};
	
	recursion(root, 0);
	
	let i = 0;
	while (i in obj) {
			const arr = obj[i];
			// console.log(arr)
			ans += minSwaps(arr, arr.length);
			i++;
	}
	
	return ans;
};

function swap(arr, i, j)
{
let temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}

// Return the minimum number
// of swaps required to sort
// the array
function minSwaps(arr,N)
{
let ans = 0;
let temp = arr.slice();

// Hashmap which stores the
// indexes of the input array
let h = new Map();

temp.sort((a,b) => a - b);
for (let i = 0; i < N; i++)
{
	h.set(arr[i], i);
}
for (let i = 0; i < N; i++)
{
 
	// This is checking whether
	// the current element is
	// at the right place or not
	if (arr[i] != temp[i])
	{
		ans++;
		let init = arr[i];

		// If not, swap this element
		// with the index of the
		// element which should come here
		swap(arr, i, h.get(temp[i]));

		// Update the indexes in
		// the hashmap accordingly
		h.set(init,h.get(temp[i]));
		h.set(temp[i],i);
	}
}
// console.log(ans)
return ans;
}