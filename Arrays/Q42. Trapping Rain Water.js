// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
	let ans = 0;
	let i = 0;
	let temp = 0;
	let flag = false;
	for (let j=0;j<height.length;j++) {
			if (height[i] === 0 && height[j] === 0) i++;
			else {
					if (height[i] > 0 && i === j) {
							flag = true;
					} else {
							if (flag === true && j - i > 1) {
									if (height[j] >= height[i]) {
											// console.log(i, j, temp, (height[i] * (j - i - 1)))
											ans = ans + (height[i] * (j - i - 1)) - temp;
											temp = 0;
											i = j;
									} else {
											temp+= height[j];
									}
									
							} else {
									if (height[j] > height[i]) {
											i = j;
									} else {
											temp+= height[j];
									}
							}
					}
			}
	}
	if (i < height.length - 1) {
			height = height.slice(i, height.length);
			height.reverse();
			i = 0;
			temp = 0;
			flag = false;
			for (let j=0;j<height.length;j++) {
					if (height[i] === 0 && height[j] === 0) i++;
					else {
							if (height[i] > 0 && i === j) {
									flag = true;
							} else {
									if (flag === true && j - i > 1) {
											if (height[j] >= height[i]) {
													// console.log(i, j, temp, (height[i] * (j - i - 1)))
													ans = ans + (height[i] * (j - i - 1)) - temp;
													temp = 0;
													i = j;
											} else {
													temp+= height[j];
											}

									} else {
											if (height[j] > height[i]) {
													i = j;
											} else {
													temp+= height[j];
											}
									}
							}
					}
			}
	}
	
	return ans;
};

let input = [1,4,54,25,56,2,123,5,12,34,41]
let result = trap(input)
console.log(result)