class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
    let map = new Map();
    let result = [];

    for(let i = 0; i < nums.length; i++) {

        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    for(let [num, count] of map) {

        if(count > nums.length / 3) {
            result.push(num);
        }
    }

    return result;
};
    }

