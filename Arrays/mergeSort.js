// Implementation of merge sort

const arr = [38, 27, 43, 3, 9, 82, 10];

const merge = (arr, left, right, mid) => {
	const n1 = mid - left + 1;
	const n2 = right - mid;

	const arr1 = new Array(n1);
	const arr2 = new Array(n2);

	for (let i=0;i<n1;i++) {
		arr1[i] = arr[i + left];
	}
	for (let j=0;j<n2;j++) {
		arr2[j] = arr[mid + 1 + j];
	}

	let k=left;
	let x=0;
	let y=0;

	while (x < n1 && y < n2) {
		if (arr1[x] <= arr2[y]) {
			arr[k] = arr1[x];
			x++;
		} else {
			arr[k] = arr2[y];
			y++;
		}
		k++;
	}
	if (x === n1) {
		while (y<n2) {
			arr[k] = arr2[y];
			y++;
			k++;
		}
	} else {
		while (x<n1) {
			arr[k] = arr1[x];
			k++;
			x++;
		}
	}
};

const mergeSort = (arr, left = 0, right = arr.length - 1) => {
	if (left >= right) return;
	const mid = left + parseInt((right - left) / 2);
	mergeSort(arr, left, mid);
	mergeSort(arr, mid+1, right);
	merge(arr, left, right, mid);
};

mergeSort(arr);

console.log(arr);