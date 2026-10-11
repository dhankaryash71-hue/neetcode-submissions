class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {

        let sum=0;
        for(let i =0;i<nums.length;i++){
            sum+=nums[i];
        }

        let leftsum=0;

        for(let i =0;i<nums.length;i++){
            let rightsum= sum-leftsum-nums[i];
            if(leftsum===rightsum){
              return i
            }
            leftsum+=nums[i]
        }
            return -1
    }

}
