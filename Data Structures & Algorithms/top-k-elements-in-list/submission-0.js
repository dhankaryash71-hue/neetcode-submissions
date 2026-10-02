class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

    let map = new Map();

    for(let i = 0; i < nums.length; i++) {

        if(map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
        else {
            map.set(nums[i], 1);
        }
    }

    let arr = [];

    for(let [num, count] of map) {
        arr.push([num, count]);
    }

    arr.sort((a, b) => b[1] - a[1]);

    let result = [];

    for(let i = 0; i < k; i++) {
        result.push(arr[i][0]);
    }

    return result;
    }
}
