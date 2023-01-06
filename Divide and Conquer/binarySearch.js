const arr = [1,6,3,9,2,4,7];
const searchElem = 1;

const binarySearch = (arr, left, right, searchElem) => {
	if (left>right) return null;
	if (left === right) {
		if (arr[left] === searchElem) return left;
		return null;
	}
	const mid = left + parseInt((right - left)/2);
	const lef = binarySearch(arr, left, mid, searchElem);
	if (lef !== null) {
		return lef;
	}
	const rig = binarySearch(arr, mid+1, right, searchElem);
	if (rig !== null) {
		return rig;
	}

	return null;
};

const ans = binarySearch(arr, 0, arr.length - 1, searchElem);
console.log(ans);