// There is one meeting room in a firm. There are N meetings in the form of (start[i], end[i]) where start[i] is start time of meeting i and end[i] is finish time of meeting i.
// What is the maximum number of meetings that can be accommodated in the meeting room when only one meeting can be held in the meeting room at a particular time?

// Note: Start time of one chosen meeting can't be equal to the end time of the other chosen meeting.

class Solution 
{
    //Function to find the maximum number of meetings that can
    //be performed in a meeting room.
    maxMeetings(start, end, n)
    {
        let ans = 0;
        const mapper = [];
        
        for (let i=0;i<n;i++) {
            mapper.push([start[i], end[i], i]);
        }
        
        mapper.sort((a,b) => a[1] - b[1]);
        
        let prev = null;
        
        for (let j=0;j<n;j++) {
            if (prev === null) {
                ans++;
                prev = mapper[j];
            } else {
                if (mapper[j][0] > prev[1]) {
                    ans++;
                    prev = mapper[j];
                }
            }
        }
        
        return ans;
    }
}