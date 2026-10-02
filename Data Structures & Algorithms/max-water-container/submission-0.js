class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left=0;
        let right=heights.length-1;
        let maxwater=0

        while(left<right){
            let width=right-left;
            let h=Math.min(heights[right],heights[left]);
             let area=width*h;
            maxwater=Math.max(maxwater,area);

            if(heights[left]<heights[right]){
                left++;
            }
            else {
                right--;
            }
        }
        return maxwater;
    }
}
