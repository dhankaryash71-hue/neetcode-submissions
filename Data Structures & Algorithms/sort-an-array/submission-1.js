class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
         function mergeSort(arr){
            if(arr.length<=1){
                return arr;
            }
            let mid=Math.floor(arr.length/2);

              let left = mergeSort(arr.slice(0,mid))
              let right = mergeSort(arr.slice(mid))

              let res=[];
              let i=0;
              let j=0;

              while(i<left.length && j<right.length){
                if(left[i]<=right[j]){
                    res.push(left[i]);
                    i++
                }
                else{
                    res.push(right[j]);
                    j++
                }
              }
              while(i<left.length){
                res.push(left[i])
                i++;
              }
              while(j<right.length){
                res.push(right[j])
                j++
              }
              return res;
         }
         return mergeSort(nums);
    }
}
