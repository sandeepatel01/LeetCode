class Solution {
public:
    int peakIndexInMountainArray(vector<int>& arr) {
        int n = arr.size();
        int start = 0;
        int end = n-1;
        int mid = start + (end-start)/2;
        
        while(start < end){
            if(arr[mid] < arr[mid+1]){
                // A line 
                // shift in right
                
                start = mid+1;
            }else{
                
                // B line Or peek
                // shift in left 
                end = mid;
            }
            mid = start + (end-start)/2;
        }
        return start;
    }
};