
/* Declare and implement your function here 
eg: function example(parameter_name1,parameter_name2....){}
Handle the input/output from main()
*/


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
input_stdin += data;
});

process.stdin.on('end', function () {
input_stdin_array = input_stdin.split("\n");
main();    
});

function readLine() {
return input_stdin_array[input_currentline++];
}

const merge = (arr, l, m, r) => {
    const n1 = m + 1 - l;
    const n2 = r - m;
    
    const arr1 = new Array(n1);
    const arr2 = new Array(n2);
    
    for (let i=0;i<n1;i++) {
        arr1[i] = arr[i + l];
    }
    for (let j=0;j<n2;j++) {
        // console.log(arr, m+1+j, arr[m+1+j], l, m, r, j)
        arr2[j] = arr[m + 1 + j];
    }
    
    let k=l;
    let x=0;
    let y=0;

    while (x < n1 && y < n2) {
        if (arr1[x] <= arr2[y]) {
            arr[k] = arr1[x];
            x++;
        } else {
            // console.log(count, x, arr1, arr2, l, m, r, n1 , n2)
            count += n1 - x;
            arr[k] = arr2[y];
            y++;
        }
        k++;
    }
    while (x < n1) {
        arr[k] = arr1[x];
        x++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (y < n2) {
        arr[k] = arr2[y];
        y++;
        k++;
    }
};
const mergeSort = (arr, l, r) => {
    if (l >= r) return;
    const m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m+1, r);
    merge(arr, l, m, r);
};

let count;

function main() {
    const n = parseInt(readLine());
    let arr = readLine().replace(/\s+$/g, '').split(' ');
    // console.log(arr);
    count = 0;
    arr = arr.map(elem => parseInt(elem));
    mergeSort(arr, 0, n - 1);
    console.log(count);
    return;
}