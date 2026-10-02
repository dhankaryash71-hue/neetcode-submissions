class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        
        let low =0;
        for(let high=1; high<nums.length;high++){
            if(nums[low]!=nums[high]){
             low++;
              nums[low]=nums[high];
            }
        }
        return low+1;
    }
}
