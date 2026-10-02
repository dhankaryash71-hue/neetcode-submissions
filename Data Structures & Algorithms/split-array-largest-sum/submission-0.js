class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {

    let low = Math.max(...nums);
    let high = nums.reduce((a, b) => a + b, 0);

    while(low < high) {

        let mid = Math.floor((low + high) / 2);

        let parts = 1;
        let sum = 0;

        for(let i = 0; i < nums.length; i++) {

            if(sum + nums[i] > mid) {
                parts++;
                sum = nums[i];
            } else {
                sum += nums[i];
            }
        }

        if(parts <= k) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
}
    
}
