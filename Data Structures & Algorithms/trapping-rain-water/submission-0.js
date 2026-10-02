class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        let low=0;
        let high=height.length-1;

        let lmax=0;
        let hmax=0;
        let tw=0;
        while(low<=high){
            if(height[low]<height[high]){
                if(height[low]>lmax){
                    lmax=height[low]
                }
                else {
                    tw+=lmax-height[low]
                }
                low++
            }

            else {
                if(height[high]>hmax){
                    hmax=height[high]
                }
                else {
                    tw+=hmax-height[high]
                }
                high--;
            }
        }
        return tw;
    }
}
