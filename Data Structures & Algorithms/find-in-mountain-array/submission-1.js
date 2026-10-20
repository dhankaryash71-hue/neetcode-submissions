/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        let length=mountainArr.length();
        let low=0;
        let high=length-1;

        while(low<=high){
            let mid=Math.floor((low+high)/2);
     if(mountainArr.get(mid)<mountainArr.get(mid+1)){
        low=mid+1;
     }
     else {
        high=mid-1;
     }
        }

        let peak =low;

        // left side 

         low=0;
         high=peak

         while(low<=high){
         let mid=Math.floor((low+high)/2);
         let value=mountainArr.get(mid);
         if(value===target){
            return mid;
         }
         else if(value<target){
            low=mid+1;
         }
         else {
            high=mid-1
         }
         }

         // right side

         low=peak
         high=length-1;
  
  while(low<=high){
         let mid=Math.floor((low+high)/2);
         let value=mountainArr.get(mid);
         if(value===target){
            return mid;
         }
         else if(value<target){
            high=mid-1;
         }
         else {
            low=mid+1
         }
         }
    return -1;
    }
}
