class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for(let num of nums){
            map.set(num,(map.get(num)||0)+1)
        }

        let buckets = new Array(nums.length+1)

        for(let i=0;i<buckets.length;i++){
            buckets[i]=[];
        }

        for(let [num,count] of map){
            buckets[count].push(num);
        }
              let result =[];
        for(let i=buckets.length-1;i>=0;i--){
            for(let num of buckets[i]){
                result.push(num);
            }

            if(result.length==k){
                return result;
            }
        }
        return result;
    }
}
