/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
	intervals = intervals.sort((a,b) => {
			return a[0] - b[0];
	})
	const nonOverlapping = [intervals[0]];
	for (let i=1; i<intervals.length;i++) {
			const lastElem = nonOverlapping[nonOverlapping.length - 1];
			if (lastElem[1] >= intervals[i][0]) {  // merge the intervals
					if (intervals[i][1] > lastElem[1]) {
							nonOverlapping[nonOverlapping.length - 1][1] = intervals[i][1];
					}
			} else {
					nonOverlapping.push(intervals[i]);
			}
	}
	return nonOverlapping;
};