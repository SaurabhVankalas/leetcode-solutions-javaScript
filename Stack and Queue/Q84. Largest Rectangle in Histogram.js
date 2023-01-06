// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

/**
 * @param {number[]} heights
 * @return {number}
 */
// Brute - force
 var largestRectangleArea = function(heights) {
	let ans = 0;
	for (let i=0;i<heights.length;i++) {
			let minHt = heights[i];
			for (let j=i;j>=0;j--) {
					minHt = Math.min(minHt, heights[j]);
					ans = Math.max(ans, (i - j + 1) * minHt);
			}
	}
	return ans;
};

// optimal Solution

var largestRectangleArea = function(heights) {
	let ans = 0;
	let stack = [];
	const prevSmallerElem = [];
	const nextSmallerElem = new Array(heights.length);
	for (let i=0;i<heights.length;i++) {
			if (stack.length === 0) {
					prevSmallerElem.push(0);
					// stack.push(i);
			} else {
					while (heights[stack[stack.length - 1]] >= heights[i]) {
							stack.pop();
					}
					if (stack.length > 0) {
							prevSmallerElem.push(stack[stack.length - 1] + 1);
							// stack.push(i);
					} else {
							prevSmallerElem.push(0);
					}
			}
			stack.push(i);
	}
	stack = [];
	for (let i=heights.length - 1;i>=0;i--) {
			if (stack.length === 0) {
					nextSmallerElem[i] = heights.length - 1;
					// stack.push(i);
			} else {
					while (heights[stack[stack.length - 1]] >= heights[i]) {
							stack.pop();
					}
					if (stack.length > 0) {
							nextSmallerElem[i] = stack[stack.length - 1] - 1;
							// stack.push(i);
					} else {
							nextSmallerElem[i] = heights.length - 1;
					}
			}
			stack.push(i);

	}
	// console.log(nextSmallerElem, prevSmallerElem)
	for (let i=0;i<heights.length;i++) {
			const area = (nextSmallerElem[i] - prevSmallerElem[i] + 1) * heights[i];
			if (area > ans) ans = area;
	}
	return ans;
	// for (let i=0;i<heights.length;i++) {}
};

