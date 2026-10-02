class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
   let left=0;
   let right=nums.length-1;

   while(left<=right){
     let mid=Math.floor((left+right)/2);

     if(nums[mid]===target){
        return true;
     }

     // for duplicate element;

     if(nums[left]===nums[mid] && nums[mid] ===nums[right]){
        left++;
        right--;
        continue;
     }

     // left side 

     if(nums[left]<=nums[mid]){
        if(nums[left]<=target && target <nums[mid] ){
            right=mid-1;
        }
        else{
            left=mid+1;
        }
     }

     // right side
     else{
        if(nums[mid]<target && target <=nums[right]){
            left=mid+1;
        }
        else{
            right=mid-1;
        }
     }
   }
      return false;
    }
}
