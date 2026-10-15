class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left=weights[0]
        let right=0;

        for(let i=0;i<weights.length;i++){
            if(weights[i]>left){
                left=weights[i]
            }
            right+=weights[i]
        }

        while(left<right){
            let mid=Math.floor((left+right)/2)

            let daysNeed=1;
            let currentWeight =0;

            for(let i=0;i<weights.length;i++){
                if(currentWeight+weights[i]>mid){
                    daysNeed++;
                    currentWeight=0;
                }
                currentWeight+=weights[i]
            }
            if(daysNeed>days){
                left=mid+1;
            }
            else {
                right=mid;
            }
        }
        return left;
    }
}
