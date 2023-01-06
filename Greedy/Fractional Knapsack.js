// Given weights and values of N items, we need to put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
// Note: Unlike 0/1 knapsack, you are allowed to break the item. 

class Solution 
{
    //Function to get the maximum total value in the knapsack.
    fractionalKnapsack(W, arr, n)
    {
        let maxVal = 0;
        for(let i=0;i<n;i++) {
            const wt = arr[i].weight;
            const val = arr[i].value;
            arr[i] = [wt, val, (val/wt)];
        }
        
        arr.sort((a,b) => b[2] - a[2]);
        
        for(let i=0;i<n;i++) {
            if (arr[i][0] >= W) {
                maxVal += arr[i][2] * W;
                return maxVal;
            } else {
                maxVal += arr[i][2] * arr[i][0];
                W = W - arr[i][0];
            }
        }
        
        return maxVal;
    }
}