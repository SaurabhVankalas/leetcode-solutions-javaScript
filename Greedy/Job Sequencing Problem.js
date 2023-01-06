// Given a set of N jobs where each jobi has a deadline and profit associated with it.

// Each job takes 1 unit of time to complete and only one job can be scheduled at a time. We earn the profit associated with job if and only if the job is completed by its deadline.

// Find the number of jobs done and the maximum profit.

// Note: Jobs will be given in the form (Jobid, Deadline, Profit) associated with that Job.

class Solution 
{
    //Function to find the maximum profit and the number of jobs done.
    JobScheduling(arr, n)
    {
        const mapper = [];
        let maxDead = 0;
        for(let i=0;i<n;i++) {
            maxDead = Math.max(maxDead, arr[i].dead);
            mapper.push([arr[i].dead, arr[i].profit]);
        }
        
        mapper.sort((a,b) => b[1] - a[1]);
        
        let profit = 0;
        let c = 0;
        let newArr = new Array(maxDead).fill(-1);
        
        for (let i=0;i<n;i++) {
            let j = mapper[i][0] - 1;
            while(newArr[j] !== -1 && j > -1) {
                j--;
            }
            if (j > -1) {
                newArr[j] = 1;
                profit += mapper[i][1];
                c++;
            }
        }
        
        return [c, profit];
    }
}