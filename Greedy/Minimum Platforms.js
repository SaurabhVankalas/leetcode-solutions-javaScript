// Given arrival and departure times of all trains that reach a railway station. Find the minimum number of platforms required for the railway station so that no train is kept waiting.
// Consider that all the trains arrive on the same day and leave on the same day. Arrival and departure time can never be the same for a train but we can have arrival time of one train equal to departure time of the other. At any given instance of time, same platform can not be used for both departure of a train and arrival of another train. In such cases, we need different platforms.

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number[]} dep
 * @param {number} n
 * @returns {number}
*/

class Solution {
	//Function to find the minimum number of platforms required at the
	//railway station such that no train waits.
	findPlatform(arr, dep, n)
	{
			let ans = 1;
			arr.sort((a,b) => a - b);
			dep.sort((a,b) => a - b);
			// console.log(arr,dep)
			let temp = 1;
			let prev = 0;
			for (let i=1;i<n;i++) {
					if (arr[i] <= dep[prev]) {
							// console.log(mapper[i][0], prev)
							temp++;
					} else {
							prev++;
							while(arr[i] > dep[prev]) {
									temp--;
									prev++;
							}
							// console.log(prev);
					}
					// prev = dep[i];
					ans = Math.max(temp, ans);
			}
			return Math.max(temp, ans);
	}
}