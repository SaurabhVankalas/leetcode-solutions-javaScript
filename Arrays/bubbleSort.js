// Implementation of bubble sort algorithm O(n^2) time complexity
const arr = [38, 27, 43, 3, 9, 82, 10, 27, 27, 13];

const bubbleSort = (arr) => {
	const n = arr.length;
	let swapped;
	for (let i=0;i<n;i++) {
		swapped = false;
		for (let j=0; j<n-i-1;j++) {
			if (arr[j] > arr[j+1]) {
				const temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				swapped = true;
			}
		}
		if (swapped === false) {
			break;
		}
	}
	return arr;
}

const sortedArr = bubbleSort(arr);
console.log(arr);
