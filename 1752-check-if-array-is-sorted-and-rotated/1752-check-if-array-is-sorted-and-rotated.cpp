class Solution {
public:
    bool check(vector<int>& nums) {
        
        int count=0;
        int n=nums.size();
        for(int i=1;i<n;i++){
if(nums[i-1]>nums[i]){
    count++;
}
            }
    //last elements ke liye compariganes
        
        
    if(nums[n-1]>nums[0])
        count++;
      //  return count==1;
        
        //equal equal elements bhi ho sakte he
       return count<=1;
        
        }
    
};