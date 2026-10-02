class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let low=0;
        let high=nums.length-1;
         k = k %nums.length
        while(low<high){
     [nums[low],nums[high]]=[nums[high],nums[low]];
            low++
            high--;
        }
       //reverse first k elements;
      low=0;
       high =k-1;
         while(low<high){
     [nums[low],nums[high]]=[nums[high],nums[low]];
            low++
            high--;
        }

        // reverse reaming elements
         low=k;
         high = nums.length-1;
          while(low<high){
     [nums[low],nums[high]]=[nums[high],nums[low]];
            low++
            high--;
        }
   return nums;
    }
}
