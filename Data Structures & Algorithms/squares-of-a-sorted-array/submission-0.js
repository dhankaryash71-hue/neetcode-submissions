class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let low=0;
        let high=nums.length-1;

        let res = new Array(nums.length)

        let pos=nums.length-1;

        while(low<=high){
            let leftsquare=nums[low]*nums[low]
            let rigthsquare=nums[high]*nums[high]
             
             if(leftsquare>rigthsquare){
                res[pos]= leftsquare;
                low++
             }
             else {
                 res[pos]=rigthsquare
                  high--;
             }
             pos--
        }
        return res;
    }

}
