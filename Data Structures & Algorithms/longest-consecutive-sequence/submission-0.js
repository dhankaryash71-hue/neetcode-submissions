class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

    let set = new Set(nums);
    let longest = 0;

    for(let num of set) {

        if(!set.has(num - 1)) {

            let current = num;
            let count = 1;

            while(set.has(current + 1)) {
                current++;
                count++;
            }

            if(count > longest) {
                longest = count;
            }
        }
    }

    return longest;
    }
}
